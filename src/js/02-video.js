import player from "@vimeo/player";
import { throttle } from "lodash";

/*
Додай бібліотеку Vimeo як залежність проекту через npm.
Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, 
але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
Зберігай час відтворення у локальне сховище по ключу "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

*/
const myFrame = document.querySelector('iframe');


const framePlayer = new player(myFrame);
framePlayer.setVolume(0);

framePlayer.setCurrentTime(loadFromStorage("videoplayer-current-time"));

framePlayer.on('timeupdate', throttle(({ seconds, percent, duration }) => {

    saveInStorage("videoplayer-current-time", { seconds, percent: Math.round(percent * 100), duration })
}, 1000));

 // ###############################################################

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

        return dataFromStorage === null ? 0 : parsedData.seconds
    } catch (err) { 
        console.log("Some problem: ", err.message)
    }
};
