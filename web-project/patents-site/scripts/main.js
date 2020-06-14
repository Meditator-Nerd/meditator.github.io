let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');



myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/patent-1.jpg') {
        myImage.setAttribute ('src','images/patent-2.png');
    } else {
        myImage.setAttribute ('src','images/patent-1.jpg');
    }
};

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Patents are interesting, ' + myName;
    }
}

if(!!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Patents are interesting, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}