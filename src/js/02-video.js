import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem(KEY_TIME, data.seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_TIME));
