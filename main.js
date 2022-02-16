let a = 1;
let slider;
slidershow(a);
function slidershow(n){
    slider = document.querySelectorAll('.slider');
    if(n>slider.length){
        a = 1;
    }
    if(n<1){
        a = slider.length;
    }
    for(let i=0; i<slider.length; i++){
        slider[i].style.display = "none";
    }
    slider[a-1].style.display = "block";
}
function nextslider(n){
    slidershow(a += n);
}