'use strict';

const taskForm = document.getElementsByClassName('tasks-input-section')[0];
const taskInput = document.getElementById('create-task-input');
const taskSubmitButton = document.getElementById('create-task-submit');
const tasksCardsContainer = document.getElementsByClassName('tasks-cards')[0];
const tasksCardContainer = document.getElementsByClassName('tasks-cards')[0];
const loremIpsum = 'asfosabfas fboasjb foiasjbf opasbf ioasbfoabosf'

window.addEventListener('load', () => {

    taskForm.addEventListener('submit', e => {
        e.preventDefault();

        textValid()


    });


    function textValid() {

        const taskInputValue = taskInput.value.trim();

        if (taskInputValue !== '' || null) {

            console.log(taskInputValue);
            createCardElements('input', 'tasks-card__desc', taskInputValue);

        } else {

            alert('NO');
        };
    }
});

// ========================================================= //
// GLOBAL FUNCTIONS
// ========================================================= //

let createCardElements = (element, elementClassName, elementText) => {
    const taskCard = document.createElement('div');
    taskCard.className = 'tasks-card';
    tasksCardsContainer.appendChild(taskCard);

    let domElement = document.createElement(element);
    domElement.className = elementClassName;
    domElement.type = 'text';
    domElement.value = elementText;
    taskCard.appendChild(domElement);

    const taskCardButtons = document.createElement('div');
    taskCardButtons.className = 'tasks-buttons';
    taskCard.appendChild(taskCardButtons);


    const taskCardButtonEdit = document.createElement('button');
    taskCardButtonEdit.className = 'tasks__button tasks__button--edit';
    taskCardButtonEdit.innerText = `Edit`;
    taskCardButtons.appendChild(taskCardButtonEdit);

    const taskCardButtonDelete = document.createElement('button');
    taskCardButtonDelete.className = 'tasks__button tasks__button--delete';
    taskCardButtonDelete.innerText = `Delete`;
    taskCardButtons.appendChild(taskCardButtonDelete);
}


