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
    "haydn-golden-333463-unsplash.jpg"
];