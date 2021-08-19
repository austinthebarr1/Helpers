// File should write to D:\sea\ses\siebsrvr\log
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

// To run simply put at top of function you would like to use the logger.
// then place: log("YOURMESSAGE" || String Variable) where ever you would like to log data.