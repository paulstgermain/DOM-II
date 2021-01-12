import { gsap } from 'gsap';
import { _colorStringFilter } from 'gsap/gsap-core';


let targetContainer = document.querySelector('.content-pick');

//ONLOAD ALERT

window.addEventListener('load', () => {
    alert("Wait! Before you start grading my assignment, here are the events you can trigger on this page: \n1. Load: This alert! \n2./3. Mouseenter/Mouseleave: When you hover over the nav links, they'll change colors. \n4. Click: When you click the logo, a random color is chosen and set to the background. \n5. Keydown: Press a key, and get an alert to ask if you meant it! \n6. Mouseover: When you hover over the buttons, they'll change colors too! (Technically a different event from 'mouseenter' ;)) \n7. Dblclick: When you doubleclick any image, it triggers a GSAP animation - try it out! \n8. Scroll: Scroll to the bottom of the page and trigger a CSS/JS animation on our destinations! \n9. Resize: Open your console and resize the window to see the current window sizes. \n10. Copy: Try and copy any text from any paragraph and we'll see if you aren't plagiarizing with an alert!");
})


//NAVITEM MOUSEENTER/MOUSELEAVE COLOR CHANGE

let navItems = document.querySelectorAll('nav a');

for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('mouseenter', () => { //1
        event.target.style.color = 'blue';
    })
    navItems[i].addEventListener('mouseleave', () => { //2
        event.target.style.color = 'black';
    })
}

//NAVITEMs PAGE RELOAD STOPPED WITH PREVENTDEFAULT

navItems.forEach(item => {
    item.addEventListener('click', () => {
        event.preventDefault();
    })
})

//LOGO CLICK BACKGROUND CHANGE

const colorArr = ['lightblue', 'green', 'red', 'yellow', 'orange', 'grey', 'blue', 'white'];

let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => {      //3

    let index = Math.round(Math.random() * colorArr.length);

    return document.body.style.background = colorArr[index];
});

//KEYDOWN KEY CHECK

document.addEventListener('keydown', () => {  //4
    alert(`You pressed the ${event.key} key - did you mean to do this?`)
})

//BUTTON MOUSEOVER COLOR CHANGE

const btn = document.querySelectorAll('.btn');

targetContainer.addEventListener('click', () => {
    console.log(event.target);
})

btn.forEach(item => {
    item.addEventListener('mouseover', () => { //5
        item.style.background = 'yellow';
    })
    item.addEventListener('mouseleave', () => {
        item.style.background = '#17A2B8';
    })

    //BUTTON CLICK / STOP PROPAGATION EXAMPLE

    item.addEventListener('click', () => {
        console.log(event.target);
        event.stopPropagation(); //Without this, two buttons get clicked and printed to console at once. It was the best example I could find given the context of the page handed to us.
    })
})

//VANISH IMAGES ON DOUBLECLICK / GSAP Animation for Stretch Goal

let images = document.querySelectorAll('img');
let overflow = document.querySelectorAll('.content-section, .intro, content-destination');

overflow.forEach(item => {
    item.style.overflow = 'hidden';
});


images.forEach(item => {
    item.addEventListener('dblclick', () => { //6
        gsap.to(item, {x: 1000, opacity: 0, rotation: 360, duration: 1.5});
    })
})

//SCROLL LISTENER


let target = document.querySelectorAll('.destination');

targetContainer.style.overflow = 'hidden';

target.forEach(item => {
    item.style.opacity = 0;
    item.style.position = 'relative';
    item.style.left = '600px';
    item.style.transition = '1.5s';
})


function appear() {
    target.forEach(item => {
        let position = item.getBoundingClientRect().top;
        let screenPos = window.innerHeight;

        if(position < screenPos){
            item.style.opacity = 1;
            item.style.left = '0';
        }
    })
}

window.addEventListener('scroll', appear); //7


//RESIZE

window.addEventListener('resize', () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    console.log(`Window height is: ${height}.`);
    console.log(`Window width is: ${width}`);
})

//COPY

const p = document.querySelectorAll('p');

p.forEach(item => {
    item.addEventListener('copy', () => {
        alert('You copied text - best not be plagiarizing!');
    })
})