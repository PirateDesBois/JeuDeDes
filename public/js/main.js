// Nom des joueurs

 let joueur1 = "Joueur 1";
 let joueur2 = "Joueur 2";

// changer le nom des joueurs via un prompt
let btn1=document.getElementsByClassName("butn1")[0];
let btn2=document.getElementsByClassName("butn2")[0];
 let editNames = () => {
     joueur1 = prompt("changer le nom du joueur 1");
     joueur2 = prompt("Changer le nom du joueur 2");

     document.querySelector("p.joueur1").innerHTML = joueur1;
     document.querySelector("p.joueur2").innerHTML = joueur2;
 }
btn2.addEventListener("click",editNames)

 // Function to roll the dice

let rollTheDice = () => {
     setTimeout(function () {
         let randomNumber1 = Math.floor(Math.random() * 6) + 1;
         let randomNumber2 = Math.floor(Math.random() * 6) + 1;

         document.querySelector(".img1").setAttribute("src",
             "./public/img/dice" + randomNumber1 + ".svg");

         document.querySelector(".img2").setAttribute("src",
             "./public/img/dice" + randomNumber2 + ".svg");
        if (randomNumber1 === randomNumber2) {
             document.querySelector("h1").innerHTML = "Affond général";
        }
        else if (randomNumber1 < randomNumber2) {
             document.querySelector("h1").innerHTML
                             = (joueur2 + " inflige une gorgée à " + joueur1);
        }

        else {
             document.querySelector("h1").innerHTML
                             = (joueur1 + " inflige une gorgée à " + joueur2);
        }
     }, 1000);
 }
 btn1.addEventListener("click",rollTheDice)