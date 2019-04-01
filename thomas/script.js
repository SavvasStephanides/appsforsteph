addDialerEvents();

function addDialerEvents(){
    var dialerButtons = document.querySelectorAll(".button a");
    dialerButtons.forEach(function(eachButton){
        eachButton.addEventListener("click", function(){
            var gif = eachButton.getAttribute("gif");
            if(gif == null){
                setRandomGif();
            }
            else{
                setGif(gif);
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
    playWhistle();
}

function playWhistle(){
    document.getElementById("whistlePlayer").play();
}