function strartnewgame(){
    let randomNumberGen = Math.floor(Math.random() * 6) + 1;
let randomImg = "img/dice" + randomNumberGen + ".png";
let image1= document.querySelectorAll("img")[0].setAttribute("src" , randomImg);


let randomNumberGene = Math.floor(Math.random() * 6) + 1;
let randomImge = "img/dice" + randomNumberGene + ".png";
let image2= document.querySelectorAll("img")[1].setAttribute("src" , randomImge);



if(randomNumberGen > randomNumberGene){
    document.querySelector("h1").innerHTML ="<strong>Player 1 is winner ✨</strong>";
}else if(randomNumberGene>randomNumberGen){
    document.querySelector("h1").innerHTML ="<strong>Player 2 is winner ✨</strong>";
}else{
    document.querySelector("h1").innerHTML ="<strong>Ohh Match Drawn ☠</strong>";
}
}



// strartnewgame();


document.getElementById('refresh').addEventListener('click', strartnewgame);