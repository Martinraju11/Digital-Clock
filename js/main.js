var year = document.getElementById("year");
var month = document.getElementById("month");
var date = document.getElementById("date");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var sun = document.getElementById("sun");
var mon = document.getElementById("mon");
var tue = document.getElementById("tue");
var wed = document.getElementById("wed");
var thu = document.getElementById("thu");
var fri = document.getElementById("fri");
var sat = document.getElementById("sat");
var alarms = document.querySelector(".alarms");
var done = document.getElementById("done");
var check;

var detailsNow = new Date();
var dateNow = detailsNow.getDate();
date.innerHTML = dateNow;
var monthNow = detailsNow.getMonth();
monthFinal = monthNow + 1;
month.innerHTML = monthFinal;
var yearNow = detailsNow.getFullYear();
year.innerHTML = yearNow;
var hourNow = detailsNow.getHours();
hour.innerHTML = hourNow + ":";
var minuteNow = detailsNow.getMinutes();
minute.innerHTML = minuteNow + ":";
var secondNow = detailsNow.getSeconds();
second.innerHTML = secondNow;
var dayNow = detailsNow.getDay();

setInterval(
  function () {
    secondNow++;
    second.innerHTML = secondNow;
    if (secondNow < 10) {
      second.innerHTML = "0" + secondNow;
    }
    if (secondNow > 59) {
      minuteNow++;
      minute.innerHTML = minuteNow + ":";
      secondNow = 0;
      second.innerHTML = secondNow;
    }
    if (minuteNow < 10) {
      minute.innerHTML = "0" + minuteNow + ":";
    }
    if (minuteNow > 59) {
      hourNow++;
      hour.innerHTML = hourNow + ":";
      minuteNow = 0;
      minute.innerHTML = minuteNow + ":";
    }
    if (hourNow < 10) {
      hour.innerHTML = "0" + hourNow + ":";
    }
    if (hourNow > 23) {
      dateNow++;
      date.innerHTML = dateNow + ":";
      hourNow = 0;
      hour.innerHTML = hourNow + ":";
    }

    if (
      monthFinal === 1 ||
      monthFinal === 3 ||
      monthFinal === 5 ||
      monthFinal === 7 ||
      monthFinal === 8 ||
      monthFinal === 10 ||
      monthFinal === 12
    ) {
      if (dateNow > 31) {
        monthFinal++;
        month.innerHTML = monthFinal;
        dateNow = 1;
        date.innerHTML = dateNow;
      }
    } else if (yearNow % 4 === 0 && monthFinal === 2) {
      if (dateNow > 29) {
        monthFinal++;
        month.innerHTML = monthFinal;
        dateNow = 1;
        date.innerHTML = dateNow;
      }
    } else if (yearNow % 4 !== 0 && monthFinal === 2) {
      if (dateNow > 28) {
        monthFinal++;
        month.innerHTML = monthFinal;
        dateNow = 1;
        date.innerHTML = dateNow;
      }
    } else {
      if (dateNow > 30) {
        monthFinal++;
        month.innerHTML = monthFinal;
        dateNow = 1;
        date.innerHTML = dateNow;
      }
    }

    if (monthFinal > 12) {
      yearNow++;
      year.innerHTML = yearNow;
      monthFinal = 1;
      month.innerHTML = monthFinal;
    }
    if (dayNow === 0) {
      sun.style.color = "#e74f4f";
    } else if (dayNow === 1) {
      mon.style.color = "#e74f4f";
    } else if (dayNow === 2) {
      tue.style.color = "#e74f4f";
    } else if (dayNow === 3) {
      wed.style.color = "#e74f4f";
    } else if (dayNow === 4) {
      thu.style.color = "#e74f4f";
    } else if (dayNow === 5) {
      fri.style.color = "#e74f4f";
    } else if (dayNow === 6) {
      sat.style.color = "#e74f4f";
    }
    check = hourNow + ":" + minuteNow;
    if (check === inptVal) {
      new Audio("./aud/alarm2.mp3").play();
    } else {
      new Audio("./aud/alarm2.mp3").pause();
    }
  },
  1000,
  secondNow
);

var btns, para, inptVal;

done.addEventListener("click", function () {
  var al = document.getElementById("inpt");
  inptVal = al.value;
  para = document.getElementById("alm");
  para.style.visibility = "visible";
  para.innerHTML = "Alarm set" + " " + "@" + " " + inptVal;
  btns = document.createElement("button");
  para.appendChild(btns);
  btns.innerHTML = "Remove";
  btns.style.marginLeft = "10px";
  btns.addEventListener("click", function () {
    this.parentNode.style.visibility = "hidden";
    al.value = "";
    inptVal = "";
    new Audio("./aud/alarm2.mp3").pause();
  });
});
