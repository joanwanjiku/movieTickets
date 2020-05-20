$(document).ready(function(){
    // UI

    $('form').submit(function(e){
        e.preventDefault();
        // alert("button clicked")
        var movie = $('#movie').val();
        var time = $('#time').val();
        var age = parseInt($('#age').val());
        var movieAttribute = document.getElementById('movie').value;
        alert(typeof movieAttribute);

    });
});
// business logic
function Ticket(movie, time, age){
    this.movieName = movie;
    this.movieTime = time;
    this.personAge = age;
}

price = 600;

var ageLogic = function() {
  if (age < 10) {
    console.log("person not allowed into theatre");
  } elseif (age >= 10 && age <= 23) {
    return price - (price * 0.15);
  } elseif (age > 50) {
    return price - (price * 0.1)
  } else {
    return price
  };
};

var timeLogic = function() {
  if (time === '9am-12Noon') {
    return price - (price * 0.15)
  } elseif (time === '1pm-3pm'){
    return price - (price * 0.1);
  } elseif (time === '3pm-6pm') {
    return price - (price * 0.05)
  } else {
    return price
  };
};




var movieLogic = function() {
  if (movieAttribute === 'repeat') {
    return price - (price * 0.05);
  } else {
    return price;
  }
};

// price = 600
// if age < 10 print("person not allowed into theatre"), age >= 10 && age =< 23, discount = 15%,
//  if age > 50, discount = 10%, else price = 600
// if time = 9am-12Noon, discount 15%, time = 1pm-3pm, discount= 10%, time = 3pm-6pm, discount = 5%, else price = 600
// if movie is non first-release, discount 5%
