/// grab DOM elements we want to change by id.
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');
showButton.addEventListener('click', () => {
///console.log(' show button clicked', 'validate button is connected')
/// this will remove the hidden class and display you favorite animal.       
    animal.classList.remove('hidden');
});

const showcoloranswer = document.getElementById('colorbtn');
const color = document.getElementById('favcolor');
showcoloranswer.addEventListener('click', () => {
    color.classList.remove('hidden');
});

const showoccupationanswer = document.getElementById('dreamoccbtn');
const occupationanswer = document.getElementById('occupation');
showoccupationanswer.Button.addEventListener('click', () => {
    occupationanswer.classList.remove('hidden');
});