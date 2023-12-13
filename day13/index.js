/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const guestNums = document.getElementById('num-input');
const vegCheck = document.getElementById('vegetarian-input');

const food = document.getElementById('food');

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  pickDinner();
});

const pickDinner = () => {
  if (vegCheck.checked === true) {
    food.innerText = 'Winter Squash Risotto';
  } else if (guestNums.value >= 5) {
    food.innerText = 'Turkey';
  } else {
    food.innerText = 'Ham';
  }

};
