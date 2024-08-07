function show() {
    var galeria_show = document.getElementById("galeria-hidden");
    var button = document.getElementById("showGallery");
    galeria_show.style.display = 'flex';
    button.style.display = 'none';
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
        'desenhos/20220919_130844_high.jpg',
        'desenhos/20240311_183229fl_high.png',
        'desenhos/20220902_172549_high.png',
        'desenhos/20221027_132527_high.jpg'
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

function escurecer(element) {
    var galeria = document.getElementById('galeriaId');
    var main = document.getElementById('mainId');
    var header = document.getElementById('headerId');
    
    if (galeria.classList.contains('background-escuro')) {
        galeria.classList.remove('background-escuro');
        galeria.classList.add('background-claro');
        main.classList.remove('background-escuro');
        main.classList.add('background-claro');
        header.classList.remove('background-escuro-header');
        header.classList.add('background-claro-header');
    } else {
        galeria.classList.remove('background-claro');
        galeria.classList.add('background-escuro');
        main.classList.remove('background-claro');
        main.classList.add('background-escuro');
        header.classList.remove('background-claro-header');
        header.classList.add('background-escuro-header');
    }

    if (element.textContent === 'light_mode') {
        element.textContent = 'dark_mode';
      } else {
        element.textContent = 'light_mode';
      }
}

