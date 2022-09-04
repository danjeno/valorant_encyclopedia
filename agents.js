const elements = document.querySelectorAll('.agent-wrapper');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*elements.length + 'px';
    elements.forEach (item => {
        item.style.width = width + 'px'
        item.style.height = 'auto';

    });
    rollSlider();
}

window.addEventListener('resize', init);
init();



document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= elements.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-previous').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = elements.length-1;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px';
}



// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
// };

// let callback = (entries, observer)=>{
//     entries.forEach(entry => {
//         if(entry.target.)
//     })
// }
// let observer = new IntersectionObserver(callback, options)