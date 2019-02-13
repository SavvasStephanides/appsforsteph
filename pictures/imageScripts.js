function displayRandomImage(){
    var randomImage = getRandomImage();
    changeImage(randomImage);
}

function getRandomImage(){
    var randomNumber = Math.floor(Math.random() * imageList.length);
    return imageList[randomNumber];
}

function changeImage(image){
    var pictureElement = document.querySelector("#picture");
    pictureElement.style.background = "url('images/" + image + "')";
    pictureElement.style.backgroundPosition = "center center";
    pictureElement.style.backgroundSize = "cover";
}

var imageList = [
    "ross-sokolovski-759280-unsplash.jpg",
    "szucs-laszlo-91030-unsplash.jpg",
    "mike-dorner-173502-unsplash.jpg",
    "patrick-tomasso-406271-unsplash.jpg",
    "loewe-technologies-1105848-unsplash.jpg",
    "sammy-leigh-scholl-157445-unsplash.jpg",
    "steve-johnson-625117-unsplash.jpg",
    "greyson-joralemon-299735-unsplash.jpg",
    "mariana-montes-de-oca-729507-unsplash.jpg",
    "haydn-golden-333463-unsplash.jpg",
    "thomas.jpg",
    "jeremy-allouche-532099-unsplash.jpg",
    "0156af774ba6864.jpg",
    "mikito-tateisi-333584-unsplash.jpg",
    "istockphoto-510801046-612x612.jpg",
    "ravi-roshan-383168-unsplash.jpg"
];