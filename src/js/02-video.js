import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem(KEY_TIME, data.seconds);
}

let dataCurrentTime = localStorage.getItem(KEY_TIME);

if (!dataCurrentTime) {
  dataCurrentTime = 0;
}

player.setCurrentTime(dataCurrentTime);
