class UI {
  constructor(appRenderer) {
    this.appRenderer = appRenderer;

    this.showingProgress = false;
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

    //Register actions on init page
    $("#filePickerInput").on("change", (event) => {
      let file = event.target.files[0];
      $("#intro").slideUp(() => {
        this.appRenderer.createLocalReader(file, () => {
          $("#choose-map").fadeIn(50, () => this.onShowMapChooser());
        });
      });
    });
    $("#filePickerButton").on("click", () => $("#filePickerInput").trigger("click"));
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
      $("#loading-ui").fadeIn(50);
    });
    this.appRenderer.loadMap(mapId, renderOptions, () => {
      this.showingProgress = false;
      $("#loading-ui").slideUp(() => {
        $("canvas").fadeIn(50);
        $("#controls").fadeIn(50);
      });
    });
  }

  async onShowMapChooser() {
    const mapFileList = await this.appRenderer.getMapList();
    const categoryList = mapFileList.reduce((categories, map) => {
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
    function genMapSelect() {
      const category = $("#categorySelect").val();
      $("#mapSelect").empty();
      for (const map of mapFileList) {
        if (map.category === category) {
          const opt = document.createElement("option");
          opt.value = map.baseId;
          opt.innerHTML = map.name;
          $("#mapSelect").append(opt);
        }
      }
    }
    genMapSelect();
    $("#categorySelect").on("change", genMapSelect);
    $("#mapLoadButton").on("click", () => this.onMapLoadClick());
  }
}

module.exports = UI;
