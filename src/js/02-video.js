import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onGetTimePlayer() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', throttle(onGetTimePlayer, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).catch(function (error) {
  console.log(error);
});

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// localStorage.setItem('ui-theme', 'dark');

// const theme = localStorage.getItem('ui-theme');
// console.log(theme); // "dark"

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings);
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings objec

// localStorage.setItem('ui-theme', 'light');
// console.log(localStorage.getItem('ui-theme')); // "dark"

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme')); // null

// localStorage.clear();
