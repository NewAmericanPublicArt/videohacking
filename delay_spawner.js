autowatch = 1;
outlets = 0;
var delays = new Array();
var glue;
var p = this.patcher;
var pwindow = p.getnamed("window");
var camera = p.getnamed("camera");

function msg_int(count) {
  create_delays(count);
}

function create_delays(count) {
  var glue_top = 315 - 36;
  var delay_top = 200 + 36;
  var left_pos = 36;

  remove_delays();
  glue = p.newdefault(left_pos, glue_top, 'jit.glue', '@rows', count);
  p.connect(glue, 0, pwindow, 0);
  for (var i = 0; i < count; i++) {
    delays[i] = p.newdefault(left_pos + (i * 80), delay_top, 'delayer', i + 1, count);
    p.connect(camera, 0, delays[i], 0);
    p.connect(delays[i], 0, glue, i);
  }
}

function remove_delays() {
  p.remove(glue);
  for (var i = 0; i < delays.length; i++) {
    p.remove(delays[i]);
  }
}

function print(string) {
  post(string);
  post();
}
