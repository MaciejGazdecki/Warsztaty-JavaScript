document.addEventListener('DOMContentLoaded', function(){
    const nextBtn = document.getElementById('nextPicture');
    const prevBtn = document.getElementById('prevPicture');
    const images = document.querySelectorAll('.slider li');
    let imagesCounter = 0;
    const firstImage = images[0];
    firstImage.classList.add('visible');
    nextBtn.addEventListener('click', function () {
        images[imagesCounter].classList.toggle('visible');
        if(imagesCounter === images.length-1) {
            imagesCounter = 0;
        } else {
            imagesCounter++;
        }
            images[imagesCounter].classList.toggle('visible');
    });
    prevBtn.addEventListener('click', function () {
        images[imagesCounter].classList.toggle('visible');
        if (imagesCounter === 0) {
            imagesCounter = images.length -1;
        } else {
            imagesCounter--;
        }
        images[imagesCounter].classList.toggle('visible');
    });
});