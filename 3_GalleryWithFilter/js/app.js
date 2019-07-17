document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img');
    const showButton = document.getElementById('showButton');
    const hideButton = document.getElementById('hideButton');
    const tagInput = document.getElementById('tagInput');

    showButton.addEventListener('click', function () {
        const inputValue = tagInput.value;
        tagInput.value = '';
        images.forEach(function (image) {
            if (image.dataset.tag.includes(inputValue)) {
                image.classList.remove('invisible')
            } else {
                image.classList.add('invisible')
            }
        });
    });
    hideButton.addEventListener('click', function () {
        const inputValue = tagInput.value;
        tagInput.value = '';
        images.forEach(function (image) {
            if (inputValue.length > 0) {
                if (image.dataset.tag.includes(inputValue)) {
                    image.classList.add('invisible');
                } else {
                    image.classList.remove('invisible');
                }
            }
        });
    });
});