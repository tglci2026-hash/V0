```javascript
/* ================================================= */
/* script.js COMPLET FINAL — BCC */
/* ================================================= */

const pages = {
home: document.getElementById("homeSection"),
reward: document.getElementById("rewardSection"),
market: document.getElementById("marketSection"),
profile: document.getElementById("profileSection")
};

const navButtons = {
home: document.getElementById("homeBtn"),
reward: document.getElementById("rewardBtn"),
market: document.getElementById("marketBtn"),
profile: document.getElementById("profileBtn")
};

/* ================================================= */
/* NAVIGATION */
/* ================================================= */

function showPage(page){

Object.values(pages).forEach(section=>{
section.classList.remove("active-page");
});

pages[page].classList.add("active-page");

Object.values(navButtons).forEach(btn=>{
btn.classList.remove("active-nav");
});

navButtons[page].classList.add("active-nav");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

navButtons.home.onclick=()=>{
showPage("home");
};

navButtons.reward.onclick=()=>{
showPage("reward");
};

navButtons.market.onclick=()=>{
showPage("market");
};

navButtons.profile.onclick=()=>{
showPage("profile");
};

/* ================================================= */
/* POPUP */
/* ================================================= */

const popup = document.getElementById("popup");

function showPopup(message){

popup.innerText = message;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2000);

}

document.querySelectorAll(".popup-btn")
.forEach(button=>{

button.addEventListener("click", ()=>{

showPopup("Service disponible bientôt");

});

});

/* ================================================= */
/* MODE SOMBRE / CLAIR */
/* ================================================= */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("change", ()=>{

document.body.classList.toggle("light");

});

/* ================================================= */
/* NOTIFICATION */
/* ================================================= */

document.getElementById("notifBtn")
.addEventListener("click", ()=>{

showPopup("Aucune notification");

});

/* ================================================= */
/* CACHER / VOIR SOLDE */
/* ================================================= */

const balanceText =
document.getElementById("balanceText");

const cfaText =
document.getElementById("cfaText");

const toggleBalance =
document.getElementById("toggleBalance");

let visible = true;

toggleBalance.addEventListener("click", ()=>{

visible = !visible;

if(visible){

balanceText.innerText = current;

cfaText.innerText =
"≈ " + (current*5) + " CFA";

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye"></i>';

}else{

balanceText.innerText="••••";

cfaText.innerText="≈ ••••";

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye-slash"></i>';

}

});

/* ================================================= */
/* ROUE */
/* ================================================= */

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

let rotation = 0;

spinBtn.addEventListener("click", ()=>{

const random =
Math.floor(Math.random()*360);

rotation += 1440 + random;

wheel.style.transform =
`rotate(${rotation}deg)`;

showPopup("Bonne chance 🎉");

});

/* ================================================= */
/* CITATIONS */
/* ================================================= */

const quotes = [

"Le succès appartient à ceux qui n'abandonnent jamais.",

"Chaque jour est une nouvelle opportunité.",

"Votre avenir commence aujourd’hui.",

"Croyez en vos rêves.",

"Le futur appartient aux courageux.",

"Continuez même lentement.",

"Le travail finit toujours par payer.",

"Transformez vos idées en réalité.",

"Le succès aime la discipline.",

"Soyez fier de votre progression.",

"Chaque victoire commence par un essai.",

"Ne cessez jamais d’apprendre.",

"Le progrès est une force.",

"Votre motivation est votre richesse.",

"Un petit effort chaque jour change tout.",

"Construisez votre avenir numérique.",

"Les grandes choses prennent du temps.",

"Votre potentiel est immense.",

"La persévérance crée le succès.",

"Bienvenue dans l’univers BCC."

];

const centerBtn =
document.getElementById("centerBtn");

const quotePopup =
document.getElementById("quotePopup");

const quoteText =
document.getElementById("quoteText");

const closeQuote =
document.getElementById("closeQuote");

centerBtn.addEventListener("click", ()=>{

const randomQuote =
quotes[Math.floor(
Math.random()*quotes.length
)];

quoteText.innerText =
randomQuote;

quotePopup.classList.remove("hidden");

});

closeQuote.addEventListener("click", ()=>{

quotePopup.classList.add("hidden");

});

/* ================================================= */
/* ANIMATION BCC */
/* ================================================= */

let current = 0;

setInterval(()=>{

if(visible){

current++;

balanceText.innerText = current;

cfaText.innerText =
"≈ " + (current*5) + " CFA";

if(current>=10){
current=0;
}

}

},4000);

/* ================================================= */
/* NIVEAUX */
/* ================================================= */

const badgeBtn =
document.getElementById("badgeBtn");

const levelPopup =
document.getElementById("levelPopup");

const closeLevelPopup =
document.getElementById("closeLevelPopup");

badgeBtn.addEventListener("click", ()=>{

levelPopup.classList.remove("hidden");

});

closeLevelPopup.addEventListener("click", ()=>{

levelPopup.classList.add("hidden");

});

/* ================================================= */
/* CONTACT */
/* ================================================= */

const contactBtn =
document.getElementById("contactBtn");

const contactInfo =
document.getElementById("contactInfo");

contactBtn.addEventListener("click", ()=>{

contactInfo.classList.toggle("hidden");

});

/* ================================================= */
/* SERVICES */
/* ================================================= */

const sendBtn =
document.getElementById("sendBtn");

const receiveBtn =
document.getElementById("receiveBtn");

const scanBtn =
document.getElementById("scanBtn");

const convertBtn =
document.getElementById("convertBtn");

const sendModal =
document.getElementById("sendModal");

const receiveModal =
document.getElementById("receiveModal");

const scanModal =
document.getElementById("scanModal");

const convertModal =
document.getElementById("convertModal");

sendBtn.addEventListener("click", ()=>{

sendModal.classList.remove("hidden");

});

receiveBtn.addEventListener("click", ()=>{

receiveModal.classList.remove("hidden");

});

scanBtn.addEventListener("click", ()=>{

scanModal.classList.remove("hidden");

showPopup("Autorisation caméra demandée");

});

convertBtn.addEventListener("click", ()=>{

convertModal.classList.remove("hidden");

});

/* ================================================= */
/* FERMER SERVICES */
/* ================================================= */

document.querySelectorAll(".close-service")
.forEach(button=>{

button.addEventListener("click", ()=>{

const modal =
button.getAttribute("data-close");

document.getElementById(modal)
.classList.add("hidden");

});

});

/* ================================================= */
/* CALCUL ENVOYER */
/* ================================================= */

const sendAmount =
document.getElementById("sendAmount");

const sendResult =
document.getElementById("sendResult");

sendAmount.addEventListener("input", ()=>{

const value =
Number(sendAmount.value);

const received =
value - (value*0.01);

sendResult.innerText =
"Montant reçu = " +
received.toFixed(2)
+ " BCC";

});

/* ================================================= */
/* CALCUL RECEVOIR */
/* ================================================= */

const receiveAmount =
document.getElementById("receiveAmount");

const receiveResult =
document.getElementById("receiveResult");

receiveAmount.addEventListener("input", ()=>{

const value =
Number(receiveAmount.value);

const received =
value - (value*0.01);

receiveResult.innerText =
"Montant reçu = " +
received.toFixed(2)
+ " BCC";

});

/* ================================================= */
/* CONVERTIR */
/* ================================================= */

document.querySelectorAll(".pay-btn")
.forEach(button=>{

button.addEventListener("click", ()=>{

showPopup(
"Veuillez saisir votre numéro"
);

});

});
```
