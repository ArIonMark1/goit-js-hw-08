import { throttle } from "lodash";
/*
    HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище,
    коли користувач щось друкує.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, 
message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/

const getFormElement = document.querySelector(".feedback-form");
// console.log(getFormElement);
// const buttonConfirmForm = document.querySelector('button[type=submit]');
// console.log(buttonConfirmForm)

getFormElement.addEventListener('input', (event) => { 
    /*
        Відстежуй на формі подію input, 
        і щоразу записуй у локальне сховище об'єкт з полями email і message, 
        у яких зберігай поточні значення полів форми */
    const { email, message } = event.currentTarget;

    const dataToStorage = {
        email: email.value ,
        message: message.value,
    }

    saveInStorage("feedback-form-state", dataToStorage);

})

getFormElement.addEventListener('submit', (event) => { 
    /*
    Під час сабміту форми очищуй сховище і поля форми, 
    а також виводь у консоль об'єкт з полями email, 
    message та їхніми поточними значеннями. */
    event.preventDefault();
    console.log('Дія елементу ', event.type, " була скасована");

    const { email, message } = event.currentTarget;

    console.log({email: email.value, message: message.value});

    localStorage.clear();
    event.currentTarget.reset();
})

// =======================================================

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

        return dataFromStorage === null ? undefined : parsedData
    } catch (err) { 
        console.log("Some problem: ", err.message)
    }
};