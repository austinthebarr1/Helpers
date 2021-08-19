var fileName = "";
TheApplication().TraceOn(
  "..\\Log\\" + fileName + new Date().getUTCMilliseconds() + ".txt",
  "Allocation",
  "All"
);

var log = (function createLogger() {
  var count = 0;
  return function (message) {
    count += 1;
    TheApplication().Trace("STEP" + count + " " + message);
  };
})();

(function createLogger() {
  var count = 0;
  return function (message) {
    count += 1;
    console.log("STEP" + count + " " + message);
  };
})();
