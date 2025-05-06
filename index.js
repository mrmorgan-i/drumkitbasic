var audios = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio(audios[i]);
        audio.play();
    })
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            var tom1 = new Audio(audios[0]);
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio(audios[1]);
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio(audios[2]);
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio(audios[3]);
            tom4.play();
            break;
        case "j":
            var snare = new Audio(audios[4]);
            snare.play();
            break;
        case "k":
            var crash = new Audio(audios[5]);
            crash.play();
            break;
        case "l":
            var kick = new Audio(audios[6]);
            kick.play();
            break;
        default:
    }
})