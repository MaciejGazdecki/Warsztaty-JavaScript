/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img');
    const body = document.querySelector('body');
    images.forEach(function(image) {
        image.addEventListener('click', function () {
            const url = this.getAttribute('src');
            const el = document.createElement('div');
            el.classList.add('fullScreen');
            el.innerHTML = `<img src=${url}> <button class="close">Close</button>`;
            body.appendChild(el);
            const closeBtn = el.querySelector('.close');
            const fullScreenDiv = document.querySelector('.fullScreen');
            closeBtn.addEventListener('click', function () {
                body.removeChild(fullScreenDiv);
            });
        });
    });
});