import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup4()
warmup2()
warmup1()
//made in class whit teacher
function warmup1() {
    //functie oproepen
    console.log("Exercise week 1");
    const buttons = document.querySelector('#button-1a');
    // button selecteren gebeurt niks
    buttons.addEventListener('click', function () {
        console.log('works ;)')
        document.querySelector('#content-1').innerHTML = '<p>Hello world</p>'
    })
}

// testing made myself

function warmup1m() {
    console.log("Exercise week 1");
    document.querySelector("#button-1a").addEventListener('click', function () {
        console.log('works ;)')
        document.querySelector('#content-1').innerHTML = '<p>Hello world</p>'
    })

}



/*         
     <section id="section-1">
        <div class="container">
        

            <div id="buttons-1" class="buttons">
                <button id="button-1a">Plaats je naam</button>
                <button id="button-1b">Verander de achtergrond</button>
                <button id="button-1c">Ben je er klaar voor?</button>
            </div>
            <div id="content-1" class="content">
                <p>Let's start session 1</p>
            </div>
        </div>
    </section>

    #section-1 {
    background-color: #fde0dc; /* Pastel red */


// made in class
function warmup2() {
    console.log("Exercise week 2");
    let scores = getRandomScores(10);

    document.querySelector('#button-2a').addEventListener('click', function () {
        console.log('ok')

        //TODO: sort
        scores = scores.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });

        const sum = scores.reduce(function(total, current) {
            return total + current;
        });

        console.log(sum)

        //TODO:---scores toevoegen---
        //TODO: ul toevoegen

        let html = '<ul>';

        //TODO: li per score
        scores.forEach(function (score) {
            console.log(scores);
            console.log(score);
            //TODO:li toevoegen
            //TODO: zorgen voor echte score
            html += `<li>${score}</ li>`;
        });
        html += '</ul>';

        document.querySelector('#content-2').innerHTML = html;
    })
}



function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    
        document.querySelector('#button-4a').addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metricLinks')
            .then(function (response) {
                // Check if the response is successful (status 200-299)
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
                })
                .then(function (data) {
                // Work with the parsed JSON data
                console.log('Parsed JSON response:', data);
                })
                .catch(function (error) {
                // Handle any errors that occurred during the fetch or parsing
                console.error('Error fetching data:', error);
                });
        })
        document.querySelector('#button-4b').addEventListener('click', function () {
        document.querySelector('#content-4').innerHTML = console.log(main.temp_max)
        })
        
    let main, min, max;
}

function warmup5() {

}