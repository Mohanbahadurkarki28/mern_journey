const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const changeBy = document.getElementById('changeBy');
const reset = document.getElementById('reset');
const value = document.querySelector('.value');

let currentValue = 0;
value.textContent = currentValue;

increment.addEventListener('click', () => {
    const step = changeBy.valueAsNumber || 1; // Default to 1 if the input is invalid
    currentValue += step;
    value.textContent = currentValue;
});

decrement.addEventListener('click', () => {
    const step = changeBy.valueAsNumber || 1; // Default to 1 if the input is invalid
    currentValue -= step;
    value.textContent = currentValue;
});

changeBy.addEventListener('change', () => {
    const step = changeBy.valueAsNumber;
    if (isNaN(step) || step < 1) {
        changeBy.value = 1; // Set to 1 if the value is invalid or less than 1
    }
});

reset.addEventListener('click', () => {
    currentValue = 0; // Reset to 0
    value.textContent = currentValue;
    changeBy.value = 1; // Set input back to 1
});
