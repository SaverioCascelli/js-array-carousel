const imageSource = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

const album = document.querySelector(".album");
let imgCounter = 0;

for(let i = 0 ; i < imageSource.length; i++ ){
    album.innerHTML += `<img class="sc-img d-none" src="../img/${imageSource[i]}" alt="">`;
}

const imgHtmlArr = document.getElementsByClassName("sc-img");

imgHtmlArr[imgCounter].classList.remove("d-none");



