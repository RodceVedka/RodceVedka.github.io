// Get all imgs with data-src attribute 
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the ItersectionalObserver
const ImgOption = { threshold: 0, rootMargin: "0px 0px 50px 0px"};

const loadImages = (image) =>{ image.setAttribute("src", image.getAttribute("data-src"));
                                image.onload = () => {image.removeAttribute("data-src");};};

// first check to see if the intersection is supported
if("IntersectionOserver" in window) {
   const imgObserver =  new IntersectionObserver((items, observer) =>{items.forEach((item) =>{if(item.isIntersecting) {
    loadSrcSet(item.target);
    srcObserver.unobserve(item.target);}});}, ImgOption);

   //loop through each img on check status and load if necessary
   imagesToLoad.forEach(
    (img) => { imgObserver.observe(img);});

}

else{  imagesToLoad.forEach((img) => {
    loadImages(img);
});
srcToLoad.forEach((img) => {
    loadImages(img);
});}