//Header Scroll

let nav= document.querySelector(".navbar");
window.onscroll = function (){
    if(this.document.documentElement.scrollTop > 50){
        nav. classList.add("header-scrolled");
    }else{
         nav. classList.remove("header-scrolled");
    }
}
//nav hide
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        if (navCollapse.classList.contains("show")) {
            navCollapse.classList.remove("show");
        }
    });
});






// Animate a number from 0 to end value
function animateCounter(id, end, duration) {
    const obj = document.getElementById(id);
    let start = 0;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        start += increment;
        obj.textContent = start;
        if (start == end) clearInterval(timer);
    }, stepTime);
}

// Trigger counters when page loads
document.addEventListener("DOMContentLoaded", () => {
    animateCounter("count1", 150, 2000); // Happy Clients
    animateCounter("count2", 120, 2000); // New Friendships
    animateCounter("count3", 250, 2500); // Five Star Ratings
    animateCounter("count4", 180, 2000); // Served Breakfasts
});


//Swiper SLider
// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay:{
//         delay: 3500,
//     },
// });
    var swiper = new Swiper(".mySwiper", {
direction: "horizontal",
loop: true,
autoplay: {
delay: 3500,
disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});


//gallery section////
// Select all gallery images
const galleryItems = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".lightbox-modal .close");
const prevBtn = document.querySelector(".lightbox-modal .prev");
const nextBtn = document.querySelector(".lightbox-modal .next");

let currentIndex = 0;

// Open modal
galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.innerHTML = img.alt;
        currentIndex = index;
    });
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target==modal) modal.style.display="none"; });

// Next/Prev
function showImage(index){
    modalImg.src = galleryItems[index].src;
    caption.innerHTML = galleryItems[index].alt;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
});

