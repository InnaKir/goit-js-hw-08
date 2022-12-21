import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

function setTime() {
  if (localStorage.getItem('videoplayer-current-time')) {
    return localStorage.getItem('videoplayer-current-time');
  } else {
    return 0;
  }
}
player.setCurrentTime(setTime());
