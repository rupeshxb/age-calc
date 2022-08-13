// Set height of "enter-age" div

if ($(window).width() > 768) {
  var windowHeight = $("body,html").height();
  var enterAgeHeight = $(".enter-age").height();
  var dateWrapperHeight = windowHeight - enterAgeHeight;
  $(".date-wrapper").height(dateWrapperHeight);
}

// Function to calculate age of given input values

function calcAge() {
  // value of input fields
  var yearsValue = document.querySelector("#years-value").value;
  var monthsValue = document.querySelector("#months-value").value;
  var daysValue = document.querySelector("#days-value").value;
  var hoursValue = document.querySelector("#hours-value").value;
  var minsValue = document.querySelector("#mins-value").value;
  var secsValue = document.querySelector("#secs-value").value;

  var yearsInt = parseInt(yearsValue);
  var monthsInt = parseInt(monthsValue);
  var daysInt = parseInt(daysValue);
  var hoursInt = parseInt(hoursValue);
  var minsInt = parseInt(minsValue);
  var secsInt = parseInt(secsValue);

  var a = moment();
  var b = moment(
    `${daysInt}-${monthsInt}-${yearsInt}, ${hoursInt}:${minsInt}:${secsInt}`,
    "DD-MM-YYYY, hh:mm:ss"
  );

  var age = moment.duration(a.diff(b));
  var years = age.years();
  var months = age.months();
  var days = age.days();
  var hours = age.hours();
  var mins = age.minutes();
  var secs = age.seconds();

  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
  document.getElementById("date").style.display = "block";
 
  // To display a blank space when date is not entered or when value is NAN

  if (isNaN(yearsInt) || isNaN(monthsInt) || isNaN(daysInt)){
    document.getElementById("years").innerHTML = '_____';
    document.getElementById("months").innerHTML = '_____';
    document.getElementById("days").innerHTML = '_____';
  };
  
  if(isNaN(hoursInt))
  {
    document.getElementById("hours").innerHTML = '_____';
  }
  if(isNaN(minsInt))
  {
    document.getElementById("mins").innerHTML = '_____';
  }
  if(isNaN(secsInt))
  {
    document.getElementById("secs").innerHTML = '_____';
  }
}

setInterval(calcAge, 1000);

// ---------- Form Validation ------------- //

function formValidation() {
  var yearsValue = document.querySelector("#years-value").value;
  var monthsValue = document.querySelector("#months-value").value;
  var daysValue = document.querySelector("#days-value").value;
  var hoursValue = document.querySelector("#hours-value").value;
  var minsValue = document.querySelector("#mins-value").value;
  var secsValue = document.querySelector("#secs-value").value;

  var yearsInt = parseInt(yearsValue);
  var monthsInt = parseInt(monthsValue);
  var daysInt = parseInt(daysValue);
  var hoursInt = parseInt(hoursValue);
  var minsInt = parseInt(minsValue);
  var secsInt = parseInt(secsValue);

  // To display alert messages for incorrect and empty values

  if (yearsValue.length !== 4) {
    document.querySelector("#years-alert").innerHTML = "Incorrect year format";
    if (yearsValue.length == 0){
      document.querySelector("#years-alert").innerHTML = "Must enter a value";
    }
  }
  
  if (monthsValue.length !== 2 || monthsValue > 12 || monthsValue <= 00) {
    document.querySelector("#months-alert").innerHTML = "Incorrect month format";
    if (monthsValue.length == 0){
      document.querySelector("#months-alert").innerHTML = "Must enter a value";
    }
  }

  if (daysValue.length !== 2 || daysValue > 31 || daysValue == 00) {
    document.querySelector("#days-alert").innerHTML = "Incorrect days format";
    if (daysValue.length == 0){
      document.querySelector("#days-alert").innerHTML = "Must enter a value";
    }
  }

  if (hoursValue.length !== 2 || hoursValue > 23) {
    document.querySelector("#hours-alert").innerHTML = "Incorrect hours format";
    if(hoursValue.length == 0){
      document.querySelector("#hours-alert").innerHTML = "";
    }
  }
  if (minsValue.length !== 2 || minsValue > 59) {
    document.querySelector("#mins-alert").innerHTML = "Incorrect minutes format";
    if(minsValue.length == 0){
      document.querySelector("#mins-alert").innerHTML = "";
    }
  }
  if (secsValue.length !== 2 || secsValue > 59) {
    document.querySelector("#secs-alert").innerHTML = "Incorrect seconds format";
      if(secsValue.length == 0){
        document.querySelector("#secs-alert").innerHTML = "";
      }
  }
}

// ---------- Form Validation ------------- //
