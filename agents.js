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





function show_text_1 (){
    document.getElementById("controllers-text").innerHTML = "Controllers are experts in slicing up dangerous territory to set their team up for success.";
}

function unshow_text_1 (){
    document.getElementById("controllers-text").innerHTML = "";
}

function show_text_2 (){
    document.getElementById("duelists-text").innerHTML = "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
}

function unshow_text_2 (){
    document.getElementById("duelists-text").innerHTML = "";
}

function show_text_3 (){
    document.getElementById("initiators-text").innerHTML = "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
}

function unshow_text_3 (){
    document.getElementById("initiators-text").innerHTML = "";
}

function show_text_4 (){
    document.getElementById("sentinels-text").innerHTML = "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.";
}

function unshow_text_4 (){
    document.getElementById("sentinels-text").innerHTML = "";
}
