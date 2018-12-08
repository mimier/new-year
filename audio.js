let cristmasSong = $('#audio');
let audioOn = $('#audio_on');
let audioOff = $('#audio_off');
let isChrome = !!window.chrome && !!window.chrome.webstore;

function turnOn() {
    audioOn.css('display', 'block');
    audioOff.css('display', 'none');
    cristmasSong[0].play();
}

function turnOff() {
    audioOn.css('display', 'none');
    audioOff.css('display', 'block');
    cristmasSong[0].pause();
}

isChrome && cristmasSong[0].paused ? turnOff() : turnOn();
$('svg').on('click', function() {
    this.id === 'audio_on' ? turnOff() : turnOn()
});
