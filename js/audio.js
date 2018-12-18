let christmasSong = $('#audio');
let audioOn = $('#audio_on');
let audioOff = $('#audio_off');

function turnOn() {
    audioOn.css('display', 'block');
    audioOff.css('display', 'none');
    christmasSong[0].play();
}

function turnOff() {
    audioOn.css('display', 'none');
    audioOff.css('display', 'block');
    christmasSong[0].pause();
}

!!window.chrome ? turnOff() : turnOn();
$('svg').on('click', function () {
    this.id === 'audio_on' ? turnOff() : turnOn()
});
