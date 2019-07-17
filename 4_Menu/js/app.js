document.addEventListener('DOMContentLoaded', function () {
    const li = document.querySelectorAll('.nav>ul>li');
    li.forEach(function (li) {
        li.addEventListener('mouseover', function (e) {
            if (e.target.firstElementChild !== null) {
                e.target.firstElementChild.style.display = 'inline-block';
            }
        });
        li.addEventListener('mouseout', function (e) {
            if (e.target.firstElementChild !== null) {
                e.target.firstElementChild.style.display = 'none';
            }
        })
    })
});