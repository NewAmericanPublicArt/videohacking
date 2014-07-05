autowatch = 1

delayCount = 3;
var delays = new Array(delayCount);

function bang() {
  for (var i = 0; i < delays.length; i++) {
    delays[i] = new Maxobj('delayer', i + 1, delays);
  }
  print(delays.length + " delays");
}

function print(string) {
  post(string);
  post();
}
