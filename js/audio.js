let christmasSong = $('#audio');
let audioOn = $('#audio_on');
let audioOff = $('#audio_off');

function turnOn(withMusic = false) {
    audioOn.css('display', 'block');
    audioOff.css('display', 'none');
    withMusic ? christmasSong[0].play() : null
}

function turnOff(withMusic = false) {
    audioOn.css('display', 'none');
    audioOff.css('display', 'block');
    withMusic ? christmasSong[0].pause() : null
}

!!window.chrome ? turnOff() : turnOn();
    $('svg').on('click', function () {
        this.id === 'audio_on' ? turnOff(true) : turnOn(true)
    });

