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



document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        '../desenhos_first/20240311_183229fl.jpg',
        '../desenhos/20230119_185556bss.jpg',
        '../desenhos/20231026_145357.jpg',
        '../desenhos/20231124_102852bss.jpg'
    ];

    let currentIndex = 0;

    function showNextBackgroundImage() {
        const backgrounds = document.querySelectorAll('.background-image');
        backgrounds.forEach((bg, index) => {
            if (index === (currentIndex % backgrounds.length)) {
                bg.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
                bg.style.opacity = 1;
            } else {
                bg.style.opacity = 0;
            }
        });

        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    setInterval(showNextBackgroundImage, 4000);
});

