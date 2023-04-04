import { throttle } from "lodash";

// Ключ для сховища буде рядок "feedback-form-state"
const KEY_DATA_STORAGE = "feedback-form-state";

const getFormElement = document.querySelector(".feedback-form");

const getEmailInput = document.querySelector("input[name=email]");
const getMessageInput = document.querySelector("textarea[name=message]");
const objectDataForm = {};

getFormElement.addEventListener('input', throttle(fillDataStorage, 500));
getFormElement.addEventListener('submit', onSubmitForm);


console.log('Data from Storage: ', loadFromStorage(KEY_DATA_STORAGE))
//     
inputDataToForm(loadFromStorage(KEY_DATA_STORAGE))

IsFornInputFilled(getEmailInput, getMessageInput)
// =============================================================
function fillDataStorage(event) {
    objectDataForm[event.target.name] = event.target.value;
    
    /*
        Відстежую на формі подію input, 
        і щоразу записую у локальне сховище об'єкт з полями email і message, 
        у яких зберігаю поточні значення полів форми */
    saveInStorage(KEY_DATA_STORAGE, objectDataForm);
};
// =============================================================
function onSubmitForm(event) { 
    /*
        Під час сабміту форми очищую сховище і поля форми, 
        а також вивожу у консоль об'єкт з полями email, 
        message та їхніми поточними значеннями. */
    event.preventDefault();
    console.log({ email: getEmailInput.value, message: getMessageInput.value });

    localStorage.clear();
    event.currentTarget.reset();

};
// =======================================================
// ======== Basicfunctions to work with the storage ======
function saveInStorage(key, value) {
    try {
        const dataToSave = JSON.stringify(value);
        localStorage.setItem(key, dataToSave);

    } catch (err) { 
        console.log("Some problem: ", err.message)
    }
};

function loadFromStorage(key) { 
    try {
        const dataFromStorage = localStorage.getItem(key);
        const parsedData = JSON.parse(dataFromStorage);

        return parsedData
    } catch (err) { 
        console.log("Some problem: ", err.message)
    }
};

function inputDataToForm(data) {
    // Під час завантаження сторінки перевіряю стан сховища, 
    // якщо там є збережені дані
    if (!data) { 
            return;
    }
    // заповнюю поля форми даними зі сховища.
    console.log('Data from function: ', data);
    getEmailInput.value = data.email ? data.email: '';
    getMessageInput.value = data.message ? data.message: '';
}

function IsFornInputFilled(email, message) { 
    //  при перезагрузкі сторінки об'єкт очищується, і при повторному заповнені полів об'єкт перезаписується
    // щоб не втрачати дані з полів, при вигрузкі даних із сховища після перезагрузки сторінки передаю їх як
    // початкові значення в об'єкт
    objectDataForm[email.name] = email.value;
    objectDataForm[message.name] = message.value;
}