$(document).ready(function() {


function jumpTo(input) {
  $('body').animate({
      scrollTop: $(input).offset().top
    }, 800);
};
      
var ev = [{
    id : 1,
    name : "Joined Faecbook",
    on : new Date(1970,2,15)
  },{
    id : 11,
    name : "Updated my first status message",
    on : new Date(2011,2,17)
  },{
    id : 2,
    name : "Joined Twitter",
    on : new Date(2011,5,30)
  },{
    id : 9,
    name : "Created a new blogger account",
    on : new Date(2011,7,5)
  },{
    id : 3,
    name : "Trip to Australia",
    on : new Date(2012,5,5)
  },{
    id : 4,
    name : "Trip to New Zealand",
    on : new Date(2012,5,30)
  },{
    id : 5,
    name : "Awesome new year",
    on : new Date(2013,0,1)
  },{
    id : 6,
    name : "Will go to Moon",
    on : new Date(2013,6,10)
  },{
    id : 7,
    name : "Will go to Mars",
    on : new Date(2014,6,10)
  },{
    id : 8,
    name : "No idea about this date",
    on : new Date(2015,6,10)
  }]

var tl = $('#myTimeline').jqtimeline({
    events : ev,
    numYears:30,
    startYear:1970,
    gap:15,
    click:function(e,event){
    }
  });


$("#btn-show-modal").click(function(e) {
  e.preventDefault();
  $("#myModal").modal('show');
});
});


