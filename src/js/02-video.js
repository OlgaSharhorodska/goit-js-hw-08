import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe")
const LS_KEY = "videoplayer-current-time";

const player = new Player(iframe);

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime({ seconds }) {
    localStorage.setItem(LS_KEY,seconds);
}

player.setCurrentTime(localStorage.getItem(LS_KEY)||0)


