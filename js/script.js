function validateForm(){
    const name = document.forms["message-form"]["nama"].value;
    const tanggalLahir = document.forms["message-form"]["date"].value;
    const kelamin = document.forms["message-form"]["jenis-kelamin"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    if(name == "" || tanggalLahir =="" || kelamin =="" || pesan ==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    document.getElementById('nama-result').innerHTML = name;
    document.getElementById('tanggallahir-result').innerHTML = tanggalLahir;
    document.getElementById('jeniskelamin-result').innerHTML = kelamin;
    document.getElementById('pesan-result').innerHTML = pesan;

    return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n>imgList.length) slideIndex = 1;
    else if(n<1) slideIndex.length;

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 4000)

// script.js

// Function to navigate to a different page

  
