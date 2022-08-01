// écoute de l'événement du chargement de la page.
window.addEventListener('load', function(event){

// création d'une div container
var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

//création du formulaire music-form
var form = document.createElement("form");
form.className = "music-form";
container.appendChild(form);

//création d'un titre dans le formulaire
var form_title = document.createElement("h1");
form_title.textContent = "Les notes de musique";
form.appendChild(form_title);

//création d'un paragraphe dans le formulaire
var p = document.createElement("p");
p.textContent = "Choisissez une note pour connaitre sa correspondance en notation américaine"
form.appendChild(p);

//création du menu select
var menu = document.createElement("select");
form.appendChild(menu);

//création du tableau de correspondance des notes
var classicNotes = new Array ("do", "ré", "mi", "fa", "sol", "la", "si");
var americanNotes = new Array("C", "D","E","F","G","A","B");
var notes = new Array(classicNotes, americanNotes);

//création des options du menu select
menu.options[0] = new Option("", "nothing");
menu.options[0].setAttribute("selected", true);
notes[0].forEach(function(currentValue, index){
    menu.options[menu.options.length] = new Option(currentValue, index);
});

// écoute de l'événement de modification de l'élément
menu.addEventListener('change', function(event){
    var index = event.target.value;
    if(index != "nothing"){
        alert("Le note ordinaire " + notes[0][index] + " correspond à " + notes[1][index]);
    }
})
});