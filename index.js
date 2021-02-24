const ObjUn = {
  nom: "banane",
  prix: Math.round(Math.random() * 10000000),
  time: 0.5,
};

const User = {
  nom: "",
  nbpts: 0,
  tentative: 0,
};

let prenom = prompt("Indiquez votre Pseudo pour jouer : ");
User.nom = prenom;
console.log(ObjUn.prix);

function start() {
  document.getElementById("go").disabled = true;

  let startMinutes = ObjUn.time;
  let time = startMinutes * 60;

  const countDownElement = document.getElementById("chrono");
  var montemps = setInterval(updateChrono, 1000);
  function updateChrono() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? "0" + seconds : seconds;
    countDownElement.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (minutes == 0 && seconds == 0) {
      document.getElementById("go").style.display = "none";
      countDownElement.innerHTML = `Mais Combien coute cette putain de bannane ${User.nom}, juste ${ObjUn.prix}`;
      document.getElementById("btn-reload").style.display = "inline";
      document.getElementById("prix").style.display = "none";
      document.getElementById("btn").style.display = "none";
      document.getElementById("prenom").style.display = "none";
      clearInterval(montemps);
    }
  }
}

const pElement = document.getElementById("prenom");
pElement.innerHTML = `Bonjour ${User.nom}, tu as ${User.nbpts} points`;
const pGagner = document.getElementById("gagner");
document.getElementById("btn-reload").style.display = "none";
var count = User.tentative;
var input;
var p;
var nbpts;

do {
  function getValue() {
    p = document.getElementById("plusoumoin");
    console.log(p);
    input = document.getElementById("prix").value;
    if (input > ObjUn.prix) {
      p.innerHTML = `Plus bas fréro |||||| Tentative : ${count}`;
      count++;
      User.nbpts--;
      pElement.innerHTML = `Bonjour ${User.nom}, tu as ${User.nbpts} points`;
    } else if (input < ObjUn.prix) {
      p.innerHTML = `Plus haut fréro |||||| Tentative : ${count}`;
      count++;
      User.nbpts--;
      pElement.innerHTML = `Bonjour ${User.nom}, tu as ${User.nbpts} points`;
    }
    if (input == ObjUn.prix) {
      User.nbpts += 15;
      document.getElementById("btn").disabled = true;
      document.getElementById("btn").style.display = "none";
      document.getElementById("go").style.display = "none";
      document.getElementById("prix").style.display = "none";
      document.getElementById("btn-reload").style.display = "inline";
      document.getElementById("chrono").style.display = "none";
      document.getElementById("gagner").style.display = "block";
      pGagner.innerHTML = `C'est Gagner !! ${User.nom} en ${User.nbpts} et ${User.tentative} bravo`;
      pElement.innerHTML = `Merci !`;
    }
  }
} while (input == ObjUn.prix);

function reload() {
  window.location.reload();
}
