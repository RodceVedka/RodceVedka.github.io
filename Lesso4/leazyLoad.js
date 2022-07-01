let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imageOption = {
    threshold: 5, 
    rootMargin: "0px 0px -10px 0px",
}
imagesToLoad.forEach((img)=>{
    loadImages(img)
})


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, server) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    },imageOption);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
   