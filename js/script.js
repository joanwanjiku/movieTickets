$(document).ready(function(){
    // UI

    $('form').submit(function(e){     
        e.preventDefault();
        // alert("button clicked")
        var movie = $('#movie').val();
        var time = $('#time').val();
        var age = parseInt($('#age').val());
        alert(typeof time);
    });
});
// business logic
function Ticket(movie, time, age){
    this.movieName = movie;
    this.movieTime = time;
    this.personAge = age;
}

Ticket.prototype.determinePrice = function(){
    var price = 0
    if (this.personAge > 40 ){
        price = 20;
    }else{

    }
    return price;
};

var firstTicket = new Ticket();

// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }



// price = 600
// if age < 10 print("person not allowed into theatre"), age >= 10 && age =< 23, discount = 15%,
//  if age > 50, discount = 10%, else price = 600
// if time = 9am-12Noon, discount 15%, time = 1pm-3pm, discount= 10%, time = 3pm-6pm, discount = 5%, else price = 600 
// if movie is non first-release, discount 5%