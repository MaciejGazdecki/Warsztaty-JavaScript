/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img');
    const body = document.querySelector('body');
    // console.log(images,body);
    images.forEach(function(image) {
        image.addEventListener('click', function () {
            // console.log('miau');
            const url = this.getAttribute('src');
            // console.log(url);
            const el = document.createElement('div');
            el.classList.add('fullScreen');
            el.innerHTML = `<img src=${url}> <button class="close">Close</button>`;
            body.appendChild(el);
            // console.log(el);
            const closeBtn = el.querySelector('.close');
            const fullScreenDiv = document.querySelector('.fullScreen');
            closeBtn.addEventListener('click', function () {
                body.removeChild(fullScreenDiv);
            })
        })
    });
});