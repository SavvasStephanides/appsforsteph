addDialerEvents();

function addDialerEvents(){
    var dialerButtons = document.querySelectorAll(".button a");
    dialerButtons.forEach(function(eachButton){
        eachButton.addEventListener("click", function(){
            var gif = eachButton.getAttribute("gif");
            var sound = eachButton.getAttribute("sound");
            if(gif == null){
                setRandomGif();
            }
            else{
                setGif(gif);
            }
            if(sound == null){
                playWhistle("thomas_whistle.wav");
            }
            else{
                playWhistle(sound);
            }
            
            
        });
    });
}

function setRandomGif(){
    var allGifs = [];
    document.querySelectorAll('[gif]').forEach(function(eachGif){
        allGifs.push(eachGif.getAttribute("gif"));
    });

    var random = Math.floor(Math.random() * 5);
    setGif(allGifs[random]);
}

function setGif(gifFilename){
    document.body.style.background = "url('images/" + gifFilename + "') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    
}

function playWhistle(soundFile){
    var player = document.getElementById("whistlePlayer");
    player.setAttribute("src", soundFile);
    player.play();
}