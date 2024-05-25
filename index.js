let button = document.querySelector('.buttonDark');
let mode = "Light";
button.addEventListener('click', () => {
    if (mode === "Light") {
        // This is the dark mode part for index.HTML
        document.querySelector('main').style.backgroundColor = "white";
        document.querySelector('.tagline').style.color = "black";
        document.querySelector('.box1Tagline').style.color = "black";
        document.querySelector('.box2Tagline').style.color = "black";
        document.querySelector('.box3Tagline').style.color = "black";
        document.querySelector('.user-reviews').style.backgroundColor = "white";
        document.querySelector('.review1').style.backgroundColor = "#D6DBFF";
        document.querySelector('.review1').style.color = "black";
        document.querySelector('.review2').style.backgroundColor = "#D6DBFF";
        document.querySelector('.review2').style.color = "black";
        document.querySelector('.review3').style.backgroundColor = "#D6DBFF";
        document.querySelector('.review3').style.color = "black";
        document.querySelector('.review4').style.backgroundColor = "#D6DBFF";
        document.querySelector('.review4').style.color = "black";
        document.querySelector('.footer').style.backgroundColor = "white";
        document.querySelector('.disclaimer').style.color = "black";
        document.querySelector('.container-radar').style.backgroundColor = "white";
        document.querySelector('.card').style.backgroundColor = "white";
        document.querySelector('.buttonDark').innerText = "Dark Mode";
        document.querySelector('#navbar').style.backgroundColor = "#e8e9ff";
        document.querySelector('#navbar').style.color = "black";
        document.querySelectorAll('.nav-button').forEach(function (button) {
            button.style.color = "black";
        });
        document.querySelector('.logo').style.color = "rgb(30, 30, 255)";
        document.querySelector('.userreviewheading').style.color = "rgb(30, 30, 255)";
        // Index.HTML Dark Mode Part Ends Here
        mode = "Dark";
    }
    else {
        document.querySelector('main').style.backgroundColor = "#323946";
        document.querySelector('.tagline').style.color = "white";
        document.querySelector('.box1Tagline').style.color = "white";
        document.querySelector('.box2Tagline').style.color = "white";
        document.querySelector('.box3Tagline').style.color = "white";
        document.querySelector('.user-reviews').style.backgroundColor = "#323946";
        document.querySelector('.review1').style.backgroundColor = "white";
        document.querySelector('.review1').style.color = "black";
        document.querySelector('.review2').style.backgroundColor = "white";
        document.querySelector('.review2').style.color = "black";
        document.querySelector('.review3').style.backgroundColor = "white";
        document.querySelector('.review3').style.color = "black";
        document.querySelector('.review4').style.backgroundColor = "white";
        document.querySelector('.review4').style.color = "black";
        document.querySelector('.footer').style.backgroundColor = "#323946";
        document.querySelector('.disclaimer').style.color = "white";
        document.querySelector('.container-radar').style.backgroundColor = "#323946";
        document.querySelector('.card').style.backgroundColor = "black";
        document.querySelector('.buttonDark').innerText = "Light Mode";
        document.querySelector('#navbar').style.backgroundColor = "black";
        document.querySelector('#navbar').style.color = "white";
        document.querySelectorAll('.nav-button').forEach(function (button) {
            button.style.color = "white";
        });
        document.querySelector('.logo').style.color = "rgb(157, 157, 255)";
        document.querySelector('.userreviewheading').style.color = "rgb(157, 157, 255)";
        mode = "Light";
    }
});