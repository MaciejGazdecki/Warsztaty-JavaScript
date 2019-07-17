/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function(tooltip) {
        const spanTooltip = document.createElement('span');
        spanTooltip.classList.add('tooltipText');
        spanTooltip.innerText = tooltip.dataset.text;
        tooltip.addEventListener('mouseover', function(){
            tooltip.appendChild(spanTooltip);
        });
        tooltip.addEventListener('mouseout', function (){
            tooltip.removeChild(spanTooltip);
        })
    })
});
