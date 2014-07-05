autowatch = 1;
var displays = new Array();
outlets = 0;

function json(data) {
  result = JSON.parse(data)
  create_displays(result);
}

function create_displays(json) {
  keys = Object.keys(json)

  clear_displays();
  for (var i = 0; i < keys.length; i++) {
    displays[i] = this.patcher.newdefault(10, 30 * i + 30, 'message');
    displays[i].set(json[keys[i]])
  }
}

function clear_displays() {
  for (var i = 0; i < displays.length; i++) {
    this.patcher.remove(displays[i]);
  }
}

function p(string) {
  post(string + "\n");
}
