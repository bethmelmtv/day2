/// grab DOM elements we want to change by id.
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');

///console.log(showButton, animal, 'validate to make sure we grabbed them')
// set event listeners
showButton.addEventListener('click', () => {
///console.log(' show button clicked', 'validate button is connected')
/// this will remove the hidden class and display you favorite animal.       
    animal.classList.remove('hidden');
});
