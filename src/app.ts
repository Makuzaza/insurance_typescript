// let current: any;

const insuranceRisk = () => {
    // declare a variable score and initializes it with the value 500
    let score: number = 500;
    // convert it to a number using parseInt, and assigns it to the variable age. set the type of the variable to number
    const age: number = parseInt((<HTMLInputElement>document.querySelector('#age')).value);
    // set the value entered in an input field with the ID "name" from the HTML document, setting its type to string
    const name: string = (<HTMLInputElement>document.querySelector('#name')).value; 
    const answer: HTMLElement = document.querySelector('#answers')!;
    if (!age) {
        answer.innerHTML = 'Please write your age first';
        return;
    }

    console.log(name);

    let score_age: number = 0; 

    console.log(age);

    if (age < 18) {
        score_age = score;
        console.log(score_age);
    } else if (age >= 18 && age <= 25) {
        score_age = score + (score*0.1);
        console.log(score_age);
    } else if (age >= 26 && age <= 35) {
        score_age = score + (score*0.3);
        console.log(score_age);
    } else if (age >= 36 && age <= 45) {
        score_age = score + (score*0.6);
    } else if (age >= 46 && age <= 55) {
        score_age = score + (score*1);
        console.log(score_age);
    } else if (age >= 56 && age <= 65) {
        score_age = score + (score*1.5);
        console.log(score_age);
    } else if (age >= 66) {
        score_age = score + (score*2.1);
        console.log(score_age);
    }

    let score_current: number = score_age;

    let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="current"]');
    // store the values of the checked checkboxes
    let values: string[] = [];
    // check if it is checked using a for loop
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            // push into value array
            values.push(checkboxes[i].value);
            score_current = score_current + (score_age*0.01);
        }
    }
    console.log(values)
    console.log(score_current)

    let score_goodHabits: number = score_age;
    let score_gap: number = score_age*0.05;
    let checkboxes_goodHabits: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="good_habits"]');
    let valuesHabits: string[] = [];
    // check if it is checked using a for loop
    for (let i = 0; i < checkboxes_goodHabits.length; i++) {
        // push into value array
        if (checkboxes_goodHabits[i].checked == true) {
            valuesHabits.push(checkboxes_goodHabits[i].value);
            score_goodHabits = score_goodHabits - score_gap
        }
    }
    console.log(valuesHabits);
    console.log(score_goodHabits);

    let count: number = 0;
    let score_badHabits: number = score_goodHabits;
    let checkboxes_badHabits: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="bad_habits"]');
    let valuesBadHabits: string[] = [];
    for (let i = 0; i < checkboxes_badHabits.length; i++) {
        if (checkboxes_badHabits[i].checked == true) {
            valuesBadHabits.push(checkboxes_badHabits[i].value);
            count++;
            score_badHabits = score_goodHabits + score_gap*count;
        }
    }
    console.log(valuesBadHabits);
    console.log(score_badHabits);
 
    let totalscore: number;
    totalscore = score_badHabits + (score_current - score_age);

    answer.innerHTML = `${name} <br> You choose age: ${age} <br> Your current health: <div class="total">${values}</div>
    Your good health habits: <div class="total">${valuesHabits}</div>
    Unhealthy Habits: <div class="total">${valuesBadHabits}</div> Your riskscore: <div class="score">${totalscore}</div>`;
}

const nameSelect: HTMLInputElement = <HTMLInputElement>document.querySelector('#name');
nameSelect.addEventListener('click', insuranceRisk);

const ageSelect: HTMLInputElement = <HTMLInputElement>document.querySelector('#age');
ageSelect.addEventListener('change', insuranceRisk);


const currentCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="current"]');
for (let i = 0; i < currentCheckboxes.length; i++) {
    const checkbox = currentCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
}

const goodHabitsCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="good_habits"]');
for (let i = 0; i < goodHabitsCheckboxes.length; i++) {
    const checkbox = goodHabitsCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
}

const badHabitsCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="bad_habits"]');
for (let i = 0; i < badHabitsCheckboxes.length; i++) {
    const checkbox = badHabitsCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
};

// const calculateButton: HTMLButtonElement | null = document.querySelector('#calculateButton');
// if (calculateButton) {
//     calculateButton.addEventListener('click', insuranceRisk);
// }

export default insuranceRisk;
