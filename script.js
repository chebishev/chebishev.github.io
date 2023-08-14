var dots = window.setInterval( function() {
    var wait = document.getElementById("wait");
    if ( wait.innerHTML.length > 3 ) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
    }, 1000);

var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");
const certificatesCount = 7

for (var i = 1; i <= certificatesCount; i++) {
    var thumb = document.createElement("img");
    thumb.src = "images/image" + i + ".jpg";
    thumb.alt = "Certificate " + i;
    thumb.classList.add("thumb");
    thumb.addEventListener(
    "click", function() {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
        
    }
    );
    imageThumbs.appendChild(thumb);
    }

