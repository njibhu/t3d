function setupMapChooser(mapFileList) {
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
}

module.exports = {
  setupMapChooser,
};
