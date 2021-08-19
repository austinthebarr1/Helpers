const log = (function createLogger() {
  let count = 0;
  return function (message) {
    count += 1;
    console.log("STEP" + count + " " + message);
  };
})();
