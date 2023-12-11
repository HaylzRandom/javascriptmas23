/** uncomment one of these **/
// import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'

const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');
const jokeDisplay = document.querySelector('.joke-display');

const jokeQuestion = document.getElementById('joke-ask');
const jokeAnswer = document.getElementById('joke-reply');

document
  .getElementById('window-container')
  .addEventListener('click', function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     *
     * 🎁 hint.md for help!
     **/
    leftDoor.style = 'animation: left-open 0.3s forwards';
    rightDoor.style = 'animation: right-open 0.3s forwards';
    jokeDisplay.style = 'animation: display-joke 0.3s forwards';

    getJoke();
  });

const getJoke = async () => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Christmas');
    const joke = await response.json();

    jokeQuestion.innerText = joke.setup;
    jokeAnswer.innerText = joke.delivery;
  } catch (error) {
    console.error(error);
  }
};
