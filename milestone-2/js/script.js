const imageSource = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

const album = document.querySelector(".album");


for(let i = 0 ; i < imageSource.length-1; i++ ){
    album.innerHTML = `<img src="../img/${imageSource[i]}" alt="">`;
}

