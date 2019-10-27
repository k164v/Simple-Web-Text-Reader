var prevScrollpos = window.pageYOffset;
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
    };
    text = reader.readAsText(input.files[0]);
  };

