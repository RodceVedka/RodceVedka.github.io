// Get all imgs with data-src attribute 
const imagesToLoad = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){return;}
    img.src = src;
}

const imgOptions = {};

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry => {
    if(!entries.Intersection){return;}
    else{preloadImage(entry.target); imgObserver.unobserve(entry.target);}
})}, imgOptions);

images.forEach(image => {imgObserver.observe(image);});

