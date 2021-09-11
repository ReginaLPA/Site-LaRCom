let time = 5000,
currentImageIndex = 0,
imagens = document
            .querySelectorAll("#troca img")
max = imagens.length;

function nextImage(){
    images[currentImageIndex]
        .classList.remove(".selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0
    
        imagens[currentImageIndex]
            .classList.add(".selected")


}

function start(){

}

window.addEventListener("load", function ()
   {
       let video = window.document.querySelector("#video");
       video.play();
       video.loop = true;
   });