console.log("weapons.js loaded");

function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = (timestamp) => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}

function changeStatsClassic() {
  document.getElementById("popup-header").innerHTML = "CLASSIC";

  document.getElementById("fire-rate").style.width = "60.75%";
  document.getElementById("run-speed").style.width = "50.73%";
  document.getElementById("reload-speed").style.width = "10.75%";
  document.getElementById("magazine").style.width = "12%";

  document.getElementById("popup-firerate-value").innerHTML = "6.75";
  document.getElementById("popup-runspeed-value").innerHTML = "5.73";
  document.getElementById("popup-reloadspeed-value").innerHTML = "1.75";
  document.getElementById("popup-magazine-value").innerHTML = "12";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    6.75,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.73,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    1.75,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    12,
    2500
  );
}

function changeStatsShorty() {
  document.getElementById("popup-header").innerHTML = "SHORTY";

  document.getElementById("fire-rate").style.width = "30.33%";
  document.getElementById("run-speed").style.width = "50.4%";
  document.getElementById("reload-speed").style.width = "10.75%";
  document.getElementById("magazine").style.width = "2%";

  document.getElementById("popup-firerate-value").innerHTML = "3.33";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "1.75";
  document.getElementById("popup-magazine-value").innerHTML = "2";
}
