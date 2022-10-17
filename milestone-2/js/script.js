const imageSource = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

const album = document.querySelector(".album");
let imgCounter = 0;
const topButton = document.querySelector(".arrow.top");
const bottomButton = document.querySelector(".arrow.bottom");

for(let i = 0 ; i < imageSource.length; i++ ){
    album.innerHTML += `<img class="sc-img d-none" src="../img/${imageSource[i]}" alt="">`;
}

const imgHtmlArr = document.getElementsByClassName("sc-img");

imgHtmlArr[imgCounter].classList.remove("d-none");

topButton.addEventListener("click" , function(){
    imgHtmlArr[imgCounter].classList.add("d-none");
    if(imgCounter === 0){
        imgCounter = imageSource.length-1;
    }else{
        imgCounter--;
    }
    imgHtmlArr[imgCounter].classList.remove("d-none");
})

bottomButton.addEventListener("click" , function(){
    imgHtmlArr[imgCounter].classList.add("d-none");
    if(imgCounter === imageSource.length-1){
        imgCounter = 0;
    }else{
        imgCounter++;
    }
    imgHtmlArr[imgCounter].classList.remove("d-none");
})

