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

  document.getElementById("fire-rate").style.width = "6.75%";
  document.getElementById("run-speed").style.width = "5.73%";
  document.getElementById("reload-speed").style.width = "1.75%";
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

  document.getElementById("fire-rate").style.width = "3.33%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "1.75%";
  document.getElementById("magazine").style.width = "2%";

  document.getElementById("popup-firerate-value").innerHTML = "3.33";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "1.75";
  document.getElementById("popup-magazine-value").innerHTML = "2";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    3.33,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
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
    2,
    2500
  );
}

function changeStatsFrenzy() {
  //popup-firerate-value: 10
  //popup-runspeed-value: 5.73
  //popup-reloadspeed-value: 1.5
  //popup-magazine-value: 13

  document.getElementById("popup-header").innerHTML = "FRENZY";

  document.getElementById("fire-rate").style.width = "10%";
  document.getElementById("run-speed").style.width = "5.73%";
  document.getElementById("reload-speed").style.width = "1.5%";
  document.getElementById("magazine").style.width = "13%";

  document.getElementById("popup-firerate-value").innerHTML = "10";
  document.getElementById("popup-runspeed-value").innerHTML = "5.73";
  document.getElementById("popup-reloadspeed-value").innerHTML = "1.5";
  document.getElementById("popup-magazine-value").innerHTML = "13";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        Math.floor(value);
    },
    0,
    10,
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
    1.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    13,
    2500
  );
}

function changeStatsGhost() {
  //popup-firerate-value: 6.75
  //popup-runspeed-value: 5.73
  //popup-reloadspeed-value: 1.5
  //popup-magazine-value: 15

  document.getElementById("popup-header").innerHTML = "GHOST";

  document.getElementById("fire-rate").style.width = "6.75%";
  document.getElementById("run-speed").style.width = "5.73%";
  document.getElementById("reload-speed").style.width = "1.5%";
  document.getElementById("magazine").style.width = "15%";

  document.getElementById("popup-firerate-value").innerHTML = "6.75";
  document.getElementById("popup-runspeed-value").innerHTML = "5.73";
  document.getElementById("popup-reloadspeed-value").innerHTML = "1.5";
  document.getElementById("popup-magazine-value").innerHTML = "15";

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
    1.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    15,
    2500
  );
}

function changeStatsSheriff() {
  //popup-firerate-value: 4
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.25
  //popup-magazine-value: 6

  document.getElementById("popup-header").innerHTML = "SHERIFF";

  document.getElementById("fire-rate").style.width = "4%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.25%";
  document.getElementById("magazine").style.width = "6%";

  document.getElementById("popup-firerate-value").innerHTML = "4";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.25";
  document.getElementById("popup-magazine-value").innerHTML = "6";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        Math.floor(value);
    },
    0,
    4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.25,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    6,
    2500
  );
}

function changeStatsStinger() {
  //popup-firerate-value: 16
  //popup-runspeed-value: 5.73
  //popup-reloadspeed-value: 2.25
  //popup-magazine-value: 20

  document.getElementById("popup-header").innerHTML = "STINGER";

  document.getElementById("fire-rate").style.width = "16%";
  document.getElementById("run-speed").style.width = "5.73%";
  document.getElementById("reload-speed").style.width = "2.25%";
  document.getElementById("magazine").style.width = "20%";

  document.getElementById("popup-firerate-value").innerHTML = "16";
  document.getElementById("popup-runspeed-value").innerHTML = "5.73";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.25";
  document.getElementById("popup-magazine-value").innerHTML = "20";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        Math.floor(value);
    },
    0,
    16,
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
    2.25,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    20,
    2500
  );
}

function changeStatsSpectre() {
  //popup-firerate-value: 13.13
  //popup-runspeed-value: 5.73
  //popup-reloadspeed-value: 2.25
  //popup-magazine-value: 30

  document.getElementById("popup-header").innerHTML = "SPECTRE";

  document.getElementById("fire-rate").style.width = "13.13%";
  document.getElementById("run-speed").style.width = "5.73%";
  document.getElementById("reload-speed").style.width = "2.25%";
  document.getElementById("magazine").style.width = "30%";

  document.getElementById("popup-firerate-value").innerHTML = "13.13";
  document.getElementById("popup-runspeed-value").innerHTML = "5.73";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.25";
  document.getElementById("popup-magazine-value").innerHTML = "30";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    13.13,
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
    2.25,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    30,
    2500
  );
}

function changeStatsBucky() {
  //popup-firerate-value: 1.1
  //popup-runspeed-value: 5.06
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 5

  document.getElementById("popup-header").innerHTML = "BUCKY";

  document.getElementById("fire-rate").style.width = "1.1%";
  document.getElementById("run-speed").style.width = "5.06%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "5%";

  document.getElementById("popup-firerate-value").innerHTML = "1.1";
  document.getElementById("popup-runspeed-value").innerHTML = "5.06";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "5";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    1.1,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.06,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    5,
    2500
  );
}

function changeStatsJudge() {
  //popup-firerate-value: 3.5
  //popup-runspeed-value: 5.06
  //popup-reloadspeed-value: 2.2
  //popup-magazine-value: 7

  document.getElementById("popup-header").innerHTML = "JUDGE";

  document.getElementById("fire-rate").style.width = "3.5%";
  document.getElementById("run-speed").style.width = "5.06%";
  document.getElementById("reload-speed").style.width = "2.2%";
  document.getElementById("magazine").style.width = "7%";

  document.getElementById("popup-firerate-value").innerHTML = "3.5";
  document.getElementById("popup-runspeed-value").innerHTML = "5.06";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.2";
  document.getElementById("popup-magazine-value").innerHTML = "7";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    3.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.06,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.2,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    7,
    2500
  );
}

function changeStatsAres() {
  //popup-firerate-value: 13
  //popup-runspeed-value: 5.13
  //popup-reloadspeed-value: 3.25
  //popup-magazine-value: 50

  document.getElementById("popup-header").innerHTML = "ARES";

  document.getElementById("fire-rate").style.width = "13%";
  document.getElementById("run-speed").style.width = "5.13%";
  document.getElementById("reload-speed").style.width = "3.25%";
  document.getElementById("magazine").style.width = "50%";

  document.getElementById("popup-firerate-value").innerHTML = "13";
  document.getElementById("popup-runspeed-value").innerHTML = "5.13";
  document.getElementById("popup-reloadspeed-value").innerHTML = "3.25";
  document.getElementById("popup-magazine-value").innerHTML = "50";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        Math.floor(value);
    },
    0,
    13,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.13,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    3.25,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    50,
    2500
  );
}

function changeStatsOdin() {
  //popup-firerate-value: 15.6
  //popup-runspeed-value: 5.13
  //popup-reloadspeed-value: 5
  //popup-magazine-value: 100

  document.getElementById("popup-header").innerHTML = "ODIN";

  document.getElementById("fire-rate").style.width = "15.6%";
  document.getElementById("run-speed").style.width = "5.13%";
  document.getElementById("reload-speed").style.width = "5%";
  document.getElementById("magazine").style.width = "100%";

  document.getElementById("popup-firerate-value").innerHTML = "15.6";
  document.getElementById("popup-runspeed-value").innerHTML = "5.13";
  document.getElementById("popup-reloadspeed-value").innerHTML = "5";
  document.getElementById("popup-magazine-value").innerHTML = "100";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    15.6,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.13,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        Math.floor(value);
    },
    0,
    5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    100,
    2500
  );
}

function changeStatsMarshal() {
  //popup-firerate-value: 1.5
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 5

  document.getElementById("popup-header").innerHTML = "MARSHAL";

  document.getElementById("fire-rate").style.width = "1.5%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "5%";

  document.getElementById("popup-firerate-value").innerHTML = "1.5";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "5";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    1.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    5,
    2500
  );
}

function changeStatsOperator() {
  //popup-firerate-value: 0.6
  //popup-runspeed-value: 5.13
  //popup-reloadspeed-value: 3.7
  //popup-magazine-value: 5

  document.getElementById("popup-header").innerHTML = "OPERATOR";

  document.getElementById("fire-rate").style.width = "0.6%";
  document.getElementById("run-speed").style.width = "5.13%";
  document.getElementById("reload-speed").style.width = "3.7%";
  document.getElementById("magazine").style.width = "5%";

  document.getElementById("popup-firerate-value").innerHTML = "0.6";
  document.getElementById("popup-runspeed-value").innerHTML = "5.13";
  document.getElementById("popup-reloadspeed-value").innerHTML = "3.7";
  document.getElementById("popup-magazine-value").innerHTML = "5";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    0.6,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.13,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    3.7,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    5,
    2500
  );
}

function changeStatsBulldog() {
  //popup-firerate-value: 9.14
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 24

  document.getElementById("popup-header").innerHTML = "BULLDOG";

  document.getElementById("fire-rate").style.width = "9.14%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "24%";

  document.getElementById("popup-firerate-value").innerHTML = "9.14";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "24";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    9.14,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    24,
    2500
  );
}

function changeStatsGuardian() {
  //popup-firerate-value: 5.25
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 12

  document.getElementById("popup-header").innerHTML = "GUARDIAN";

  document.getElementById("fire-rate").style.width = "5.25%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "12%";

  document.getElementById("popup-firerate-value").innerHTML = "5.25";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "12";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.25,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
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

function changeStatsPhantom() {
  //popup-firerate-value: 11
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 30

  document.getElementById("popup-header").innerHTML = "PHANTOM";

  document.getElementById("fire-rate").style.width = "11%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "30%";

  document.getElementById("popup-firerate-value").innerHTML = "11";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "30";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        Math.floor(value);
    },
    0,
    11,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    30,
    2500
  );
}

function changeStatsVandal() {
  //popup-firerate-value: 9.75
  //popup-runspeed-value: 5.4
  //popup-reloadspeed-value: 2.5
  //popup-magazine-value: 25

  document.getElementById("popup-header").innerHTML = "VANDAL";

  document.getElementById("fire-rate").style.width = "9.75%";
  document.getElementById("run-speed").style.width = "5.4%";
  document.getElementById("reload-speed").style.width = "2.5%";
  document.getElementById("magazine").style.width = "25%";

  document.getElementById("popup-firerate-value").innerHTML = "9.75";
  document.getElementById("popup-runspeed-value").innerHTML = "5.4";
  document.getElementById("popup-reloadspeed-value").innerHTML = "2.5";
  document.getElementById("popup-magazine-value").innerHTML = "25";

  animateNumber(
    (value) => {
      document.getElementById("popup-firerate-value").innerHTML =
        value.toFixed(2);
    },
    0,
    9.75,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-runspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    5.4,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-reloadspeed-value").innerHTML =
        value.toFixed(2);
    },
    0,
    2.5,
    3000
  );
  animateNumber(
    (value) => {
      document.getElementById("popup-magazine-value").innerHTML =
        Math.floor(value);
    },
    0,
    25,
    2500
  );
}
