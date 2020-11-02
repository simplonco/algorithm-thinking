var getContainerPlat = function () {
  return document.querySelector(".container");
}

var containerPlat = getContainerPlat();

var createPlat = function(index) {
  var platElt = document.createElement("div");
  var nomElt = document.createElement("h2");
  var descriptionElt = document.createElement('p');
  var priceElt = document.createElement('h3');
  var btnAddElt = document.createElement('button');

  nomElt.textContent = plats[index].nom;
  nomElt.classList.add("nom");
  descriptionElt.textContent = plats[index].description;
  descriptionElt.classList.add("description");
  priceElt.textContent = plats[index].price;
  priceElt.classList.add("price");
  btnAddElt.textContent = "Ajouter";

  platElt.appendChild(nomElt);
  platElt.appendChild(descriptionElt);
  platElt.appendChild(priceElt);
  platElt.appendChild(btnAddElt);

  containerPlat.appendChild(platElt);
}

var createPlats = function () {
  for (i in plats) {
    createPlat(i);
  }
}

createPlats();
