function show() {
    var galeria_show = document.getElementById("galeria-hidden");
    var button = document.getElementById("showGallery");
    galeria_show.style.display = 'flex';
    button.style.display = 'none';
    console.log("sucesso!")

}

function expandImage(img) {
    var overlay = document.getElementById("overlay");
    var expandedImg = document.getElementById("expanded-img");
    
    overlay.style.display = "flex";
    expandedImg.src = img.src;
}

function closeImage() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    var expandedImg = document.getElementById("expanded-img");
    expandedImg.src = '';
}