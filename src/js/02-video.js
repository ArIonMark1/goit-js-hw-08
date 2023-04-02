import Player from "@vimeo/player";
/*
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
*/
const iframeElement = document.querySelector('iframe');

// створення об'єкту плеєра
const player = new Player(iframeElement);
player.setVolume(0);

// витягуємо дані із локального сховища та встановлюємо точку старту плеєра
const storageData = localStorage.getItem('last-stop-point');
const dataPlayer = JSON.parse(storageData)

 player.setCurrentTime(dataPlayer.seconds)

// збереження пункту зупинки по евенту паузи до локального сховища
player.on('pause', ({ seconds, percent, duration }) => {

  const playerParams = {
    seconds: seconds,
    percent: percent,
    duration: duration
  }
  console.log('played the video!', seconds)
  localStorage.setItem('videoplayer-current-time', JSON.stringify(playerParams))
});


