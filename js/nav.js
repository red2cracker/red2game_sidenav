function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



function sideNavChange() {
var mql = window.matchMedia("screen and (min-width: 768px)");

if (mql.matches) {
    //$('h2').css('color', 'orange');
    $('#mySidenav').css('width', '250px');
    $('#main').css('margin-left', '250px');
} else {
    //$('h2').css('color', 'black');
    $('#mySidenav').css('width', '0px');
    $('#main').css('margin-left', '0px');
}
}



$(document).ready(function () {
  sideNavChange();
});

$(window).resize(function () {
  sideNavChange();
});


$(".gameTitle").click(function(){
  $(".gameList").toggle(250);
});

