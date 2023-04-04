import { throttle } from "lodash";

// Ключ для сховища буде рядок "feedback-form-state"
const KEY_DATA_STORAGE = "feedback-form-state"

const getFormElement = document.querySelector(".feedback-form");
const getEmailInput = document.querySelector("input[name=email]");
const getMessageInput = document.querySelector("textarea[name=message]");

getFormElement.addEventListener('input', throttle(inputDataStorage, 500));
getFormElement.addEventListener('submit', onSubmitForm);


console.log('Data from Storage: ', loadFromStorage(KEY_DATA_STORAGE))

inputDataToForm(loadFromStorage(KEY_DATA_STORAGE))
// =============================================================
function inputDataStorage(event) {
     /*
        Відстежуй на формі подію input, 
        і щоразу записуй у локальне сховище об'єкт з полями email і message, 
        у яких зберігай поточні значення полів форми */
    saveInStorage(KEY_DATA_STORAGE, {email: getEmailInput.value, message: getMessageInput.value});
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
    // Під час завантаження сторінки перевіряю стан сховища, якщо там є збережені дані
    if (!data) { 
            return;
    }
    // заповнюю поля форми даними зі сховища.
    console.log('Data from function: ', data);
    getEmailInput.value = data.email;
    getMessageInput.value = data.message;

}