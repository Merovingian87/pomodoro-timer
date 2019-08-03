"use strict";

function startTime() {
  let min = 25;
      let sec = 0;

        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

      let startTime = min + " : " + sec;

    document.getElementById("MyTimerDisplay").innerText = startTime;
    document.getElementById("MyTimerDisplay").textContent = startTime;
  }
  showStartTime();
}
