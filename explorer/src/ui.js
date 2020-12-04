class UI {
  constructor(appRenderer) {
    this.appRenderer = appRenderer;

    this.showingProgress = false;
    this.archiveLoaded = false;
    this.mapFileList = [];
    this.autoLoad = undefined;
    this.shouldUpdateUrl = false;

    this.urlUpdateInterval = setInterval(() => this.updateUrl(), 100);
    this.lastUrlData = "";
  }

  init() {
    this.appRenderer.setupScene();

    T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = (name, value) => {
      console.log(name, value);
      if (this.showingProgress) {
        $("#loadingName").text(name);
        $("#loadingValue").text(`${value}%`);
      }
    };

    T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (error) => {
      console.error(error);
      // If we receive an error before the archive is loaded that means that parsing the archive failed
      if (!this.archiveLoaded) {
        $("#intro").fadeIn();
      }
    };

    this.setupIntro();
    this.setupMapChoice();
    this.setupMapExplorer();

    this.appRenderer.setMovementSpeed(parseInt($("#mvntSpeedRange").val(), 10));
    this.appRenderer.setFogDistance(parseInt($("#fogRange").val(), 10));
    this.appRenderer.renderHook = (data) => this.updateUrl(data);

    $("canvas").on("wheel", (event) => this.onMouseWheel(event));

    this.checkAutoLoad();
  }

  /*
   * SETUPS
   */
  setupIntro() {
    $("#filePickerInput").on("change", (event) => this.onFileSelected(event));
    $("#filePickerButton").on("click", () => $("#filePickerInput").trigger("click"));
  }
  setupMapChoice() {
    $("#categorySelect").on("change", () => this.genMapSelect());
    $("#mapLoadButton").on("click", () => this.onMapLoadClick());
    $("#scanMapLink").on("click", () => this.onScanMapClick());
  }
  setupMapExplorer() {
    $("#switchControllerType").on("click", () => {
      if (this.appRenderer.controllerType === "fly") {
        this.appRenderer.setupController("orbital");
      } else {
        this.appRenderer.setupController("fly");
      }
    });
    $("#goToMapSelectButton").on("click", () => this.onBackToMapSelect());
    $("#takeScreenshot").on("click", () => this.appRenderer.takeScreenShot());
    $("#mvntSpeedRange").on("change", (event) => this.appRenderer.setMovementSpeed(event.target.valueAsNumber));
    $("#fogRange").on("change", (event) => this.appRenderer.setFogDistance(event.target.valueAsNumber));

    window.addEventListener("resize", () => this.appRenderer.onWindowResize());
  }

  /*
   * HANDLERS
   */
  onFileSelected(event) {
    const file = event.target.files[0];
    $("#intro").slideUp(() => {
      this.appRenderer.createLocalReader(file, async () => {
        this.archiveLoaded = true;
        this.mapFileList = await this.appRenderer.getMapList();
        this.fillMapChoiceSelect();
        // User might enter an non-existant ID so we only trigger autoload if we find the map
        if (this.autoLoad && this.mapFileList.find((i) => i.baseId === this.autoLoad.map)) {
          return this.onAutoLoad();
        }
        $("#choose-map").fadeIn();
      });
    });
  }

  onAutoLoad() {
    const mapId = this.autoLoad.map;
    const renderOptions = {
      zone: this.autoLoad.loadZone === undefined ? false : this.autoLoad.loadZone,
      props: this.autoLoad.loadProp === undefined ? true : this.autoLoad.loadProp,
      collisions: this.autoLoad.showHavok === undefined ? false : this.autoLoad.showHavok,
    };
    this.showingProgress = true;
    $("#loading-ui").fadeIn();
    this.appRenderer.loadMap(mapId, renderOptions, () => {
      this.appRenderer.setupController(this.autoLoad.cameraType || "fly");
      this.appRenderer.move(this.autoLoad.x, this.autoLoad.y, this.autoLoad.z);
      this.appRenderer.rotate(this.autoLoad.rx, this.autoLoad.ry, this.autoLoad.rz);
      // Don't forget to cleanup autoLoad, if not it might break map choice UI
      this.autoLoad = undefined;
      this.onMapLoaded();
    });
  }

  onMapLoadClick() {
    // Anti aliasing option can only be enabled when creating the webgl context
    // So we update that first if needed
    const aaEnabled = $("#enableAA").is(":checked");
    if (this.appRenderer.webGLRendererOptions.antialiasing !== aaEnabled) {
      this.appRenderer.webGLRendererOptions.antialiasing = aaEnabled;
      this.appRenderer.setupWebGLRenderer(true);
    }

    const mapId = $("#mapSelect").val();
    const renderOptions = {
      zone: $("#loadZone").is(":checked"),
      props: $("#loadProps").is(":checked"),
      collisions: $("#loadColl").is(":checked"),
    };
    $("#choose-map").slideUp(() => {
      this.showingProgress = true;
      $("#loading-ui").fadeIn();
    });
    this.appRenderer.loadMap(mapId, renderOptions, () => {
      // Reset the position of the camera if we already loaded a previous map
      this.appRenderer.setupController();
      this.onMapLoaded();
    });
  }

  onMapLoaded() {
    this.showingProgress = false;
    $("#loading-ui").slideUp(() => {
      $("canvas").fadeIn();
      $("#controls").fadeIn();
      $("#loadingName").text("Loading...");
      $("#loadingValue").text("");
    });
    // Sync the input ranges with their value in the appRenderer
    $("#fogRange").val(this.appRenderer.fog);
    $("#mvntSpeedRange").val(this.appRenderer.movementSpeed);
    this.shouldUpdateUrl = true;
  }

  onBackToMapSelect() {
    $("#controls").slideUp(() => {
      $("canvas").hide(0);
      $("#choose-map").fadeIn();
      this.appRenderer.cleanupMap();
      this.updateUrl(true);
      this.shouldUpdateUrl = false;
    });
  }

  onFileScanDone() {
    this.showingProgress = false;
    $("#loading-ui").slideUp(() => {
      $("#choose-map").fadeIn();
      $("#loadingName").text("Loading...");
      $("#loadingValue").text("");
    });
  }

  onScanMapClick() {
    $("#choose-map").slideUp(() => {
      $("#loadingName").text("Scanning...");
      this.showingProgress = true;
      $("#loading-ui").fadeIn(async () => {
        await this.appRenderer.scanArchiveForMaps();
        this.mapFileList = await this.appRenderer.getMapList();
        this.fillMapChoiceSelect();
        this.onFileScanDone();
      });
    });
  }

  onMouseWheel(event) {
    const newSpeed =
      event.originalEvent.deltaY < 0
        ? Math.min(this.appRenderer.movementSpeed + 100, 10000)
        : Math.max(this.appRenderer.movementSpeed - 100, 500);

    this.appRenderer.setMovementSpeed(newSpeed);
    $("#mvntSpeedRange").val(newSpeed);
  }

  /* UTILS */

  /**
   * This function generates the content of the map selector
   * and NOT the category one
   */
  genMapSelect() {
    const category = $("#categorySelect").val();
    $("#mapSelect").empty();
    for (const map of this.mapFileList) {
      if (map.category === category) {
        const opt = document.createElement("option");
        opt.value = map.baseId;
        opt.innerHTML = map.name;
        $("#mapSelect").append(opt);
      }
    }
  }

  /**
   * This function generates the content of the category selector
   * and NOT the map one
   */
  fillMapChoiceSelect() {
    const categoryList = this.mapFileList.reduce((categories, map) => {
      if (categories.indexOf(map.category) === -1) {
        categories.push(map.category);
      }
      return categories;
    }, []);
    for (const category of categoryList) {
      const opt = document.createElement("option");
      opt.value = category;
      opt.innerHTML = category;
      $("#categorySelect").append(opt);
    }
    this.genMapSelect();
  }

  updateUrl(shouldClear = false) {
    if (this.shouldUpdateUrl) {
      if (shouldClear) {
        window.location.hash = "";
      } else {
        const urlData = $.param(this.appRenderer.getUrlData());
        if (this.lastUrlData !== urlData) {
          window.location.hash = urlData;
          this.lastUrlData = urlData;
        }
      }
    }
  }

  checkAutoLoad() {
    const urlData = getParsedUrl();
    if (urlData.map) {
      this.autoLoad = urlData;
    }
  }
}

function getParsedUrl() {
  const data = deparam(window.location.hash.slice(1));
  data.map = data.map ? parseInt(data.map) : undefined;
  data.x = data.x ? parseInt(data.x) : undefined;
  data.y = data.y ? parseInt(data.y) : undefined;
  data.z = data.z ? parseInt(data.z) : undefined;
  data.rx = data.rx ? parseFloat(data.rx) : undefined;
  data.ry = data.ry ? parseFloat(data.ry) : undefined;
  data.rz = data.rz ? parseFloat(data.rz) : undefined;
  data.loadZone = data.loadZone ? data.loadZone === "true" : undefined;
  data.loadProp = data.loadProp ? data.loadProp === "true" : undefined;
  data.showHavok = data.showHavok ? data.showHavok === "true" : undefined;
  data.fog = data.fog ? parseInt(data.fog) : undefined;

  // Backward compatibility with Tyria3DApp
  if (data.pitch && data.yaw) {
    const pitch = parseFloat(data.pitch);
    const yaw = parseFloat(data.yaw);
    // convert pitch yaw to xyz rotations:
    data.rx = -Math.cos(yaw) * Math.cos(pitch);
    data.ry = Math.sin(yaw) * Math.cos(pitch);
    data.rz = -Math.sin(pitch);
  }

  return data;
}

function deparam(queryString) {
  try {
    const parameters = {};
    const chunks = queryString.split("&");
    for (const chunk of chunks) {
      const [key, value] = chunk.split("=");
      parameters[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return parameters;
  } catch (error) {
    console.error(error);
    return {};
  }
}

module.exports = UI;
