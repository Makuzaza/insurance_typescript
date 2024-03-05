"use strict";
// let current: any;
// Object.defineProperty(exports, "__esModule", { value: true });
export const insuranceRisk = () => {
    var score = 500;
    var age = parseInt(document.querySelector('#age').value);
    var name = document.querySelector('#name').value;
    var answer = document.querySelector('#answers');
    if (!age) {
        answer.innerHTML = 'Please write your age first';
        return;
    }
    if (age != Number(age)) {
        answer.innerHTML = 'Please write numbers in "Your age"';
        return;
    }
    console.log(name);
    var score_age = 0;
    console.log(age);
    if (age < 18) {
        score_age = score;
        console.log(score_age);
    }
    else if (age >= 18 && age <= 25) {
        score_age = score + (score * 0.1);
        console.log(score_age);
    }
    else if (age >= 26 && age <= 35) {
        score_age = score + (score * 0.3);
        console.log(score_age);
    }
    else if (age >= 36 && age <= 45) {
        score_age = score + (score * 0.6);
    }
    else if (age >= 46 && age <= 55) {
        score_age = score + (score * 1);
        console.log(score_age);
    }
    else if (age >= 56 && age <= 65) {
        score_age = score + (score * 1.5);
        console.log(score_age);
    }
    else if (age >= 66) {
        score_age = score + (score * 2.1);
        console.log(score_age);
    }
    var score_current = score_age;
    var checkboxes = document.querySelectorAll('input[name="current"]');
    var values = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            values.push(checkboxes[i].value);
            score_current = score_current + (score_age * 0.01);
        }
    }
    console.log(values);
    console.log(score_current);
    var score_goodHabits = score_age;
    var score_gap = score_age * 0.05;
    var checkboxes_goodHabits = document.querySelectorAll('input[name="good_habits"]');
    var valuesHabits = [];
    for (var i = 0; i < checkboxes_goodHabits.length; i++) {
        if (checkboxes_goodHabits[i].checked == true) {
            valuesHabits.push(checkboxes_goodHabits[i].value);
            score_goodHabits = score_goodHabits - score_gap;
        }
    }
    console.log(valuesHabits);
    console.log(score_goodHabits);
    var count = 0;
    var score_badHabits = score_goodHabits;
    var checkboxes_badHabits = document.querySelectorAll('input[name="bad_habits"]');
    var valuesBadHabits = [];
    for (var i = 0; i < checkboxes_badHabits.length; i++) {
        if (checkboxes_badHabits[i].checked == true) {
            valuesBadHabits.push(checkboxes_badHabits[i].value);
            count++;
            score_badHabits = score_goodHabits + score_gap * count;
        }
    }
    console.log(valuesBadHabits);
    console.log(score_badHabits);
    var totalscore;
    totalscore = score_badHabits + (score_current - score_age);
    answer.innerHTML = "".concat(name, ", You choose age: ").concat(age, " <br> Your current health: <div class=\"total\">").concat(values, "</div>\n    Your good health habits: <div class=\"total\">").concat(valuesHabits, "</div>\n    Unhealthy Habits: <div class=\"total\">").concat(valuesBadHabits, "</div> Your riskscore: <div class=\"score\">").concat(totalscore, "</div>");
};
var nameSelect = document.querySelector('#name');
nameSelect.addEventListener('click', insuranceRisk);
var ageSelect = document.querySelector('#age');
ageSelect.addEventListener('change', insuranceRisk);
var currentCheckboxes = document.querySelectorAll('input[name="current"]');
for (var i = 0; i < currentCheckboxes.length; i++) {
    var checkbox = currentCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
}
var goodHabitsCheckboxes = document.querySelectorAll('input[name="good_habits"]');
for (var i = 0; i < goodHabitsCheckboxes.length; i++) {
    var checkbox = goodHabitsCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
}
var badHabitsCheckboxes = document.querySelectorAll('input[name="bad_habits"]');
for (var i = 0; i < badHabitsCheckboxes.length; i++) {
    var checkbox = badHabitsCheckboxes[i];
    checkbox.addEventListener('click', insuranceRisk);
}
;
var calculateButton = document.querySelector('#calculateButton');
if (calculateButton) {
    calculateButton.addEventListener('click', insuranceRisk);
}
// export.default insuranceRisk;

