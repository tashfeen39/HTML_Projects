function Stopwatch() {
  let startTime,
    endTime,
    duration,
    running = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has already stopped");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };


  this.reset = function(){

    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };



  Object.defineProperty(this, "duration", {
    get: function(){
        return duration;
    }
  });
}


