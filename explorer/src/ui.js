class UI {
  constructor(appRenderer) {
    this.appRenderer = appRenderer;

    this.showingProgress = false;
    this.mapFileList = [];
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

    this.setupIntro();
    this.setupMapChoice();
    this.setupMapExplorer();

    this.appRenderer.setMovementSpeed(parseInt($("#mvntSpeedRange").val(), 10));
    this.appRenderer.setFogDistance(parseInt($("#fogRange").val(), 10));

    $("canvas").on("wheel", (event) => this.onMouseWheel(event));
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
  }

  /*
   * HANDLERS
   */
  onFileSelected(event) {
    let file = event.target.files[0];
    $("#intro").slideUp(() => {
      this.appRenderer.createLocalReader(file, async () => {
        this.mapFileList = await this.appRenderer.getMapList();
        $("#choose-map").fadeIn(() => this.fillMapChoiceSelect());
      });
    });
  }

  onMapLoadClick() {
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
    this.appRenderer.loadMap(mapId, renderOptions, () => this.onMapLoaded());
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
  }

  onBackToMapSelect() {
    $("#controls").slideUp(() => {
      $("canvas").hide(0);
      $("#choose-map").fadeIn();
      this.appRenderer.cleanupMap();
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
}

module.exports = UI;
