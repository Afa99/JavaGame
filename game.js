let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('choose your name:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name},guess the number from 0 to 100. Try to guess it in the fewest number of attempts. After each attempt I will say "a little", "a lot" or "correct".`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('a lot. Try one more.');
    } else if (guess < number) {
        printMessage('a little. Try one more.');
    } else {
        printMessage(`correct, this number ${ guess }.`);
        printMessage(`number of attempts: ${ guesses }.`);
        printMessage('GAME OVER');

        prompt.remove();
    }
}