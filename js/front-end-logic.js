var prevScrollpos = window.pageYOffset;

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      text = text.split(/\n/);
      newText = ''
      text.forEach(function(element) {
		  newText=newText+"<p>"+element+"</p>";
	  });
     document.getElementById("main_content").innerHTML=newText;
     document.getElementById("main_content").style.textAlign = "left";
    };
    text = reader.readAsText(input.files[0]);
  };


  /* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

