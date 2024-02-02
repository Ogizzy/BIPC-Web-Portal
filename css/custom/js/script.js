 //Toggle Menu--->
 var navLinks = document.getElementById("navLinks");
 function showMenu(){
     navLinks.style.right ="0";
 }
 function hideMenu(){
    navLinks.style.right ="-200px";
 } 
//End---Toggle Menu--->

//---Ongoing Slider --->

const ongoingContainers = [...document.querySelectorAll('.Ongoing-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

ongoingContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//---Facilitated Slider --->
const facilitatedContainers = [...document.querySelectorAll('.facilitated-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const pressBtn = [...document.querySelectorAll('.press-btn')];

facilitatedContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    pressBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

