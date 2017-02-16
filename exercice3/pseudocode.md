var containerPlat => {
  getClass("container plats");
}

var createPlat => {
  createElement div plat
  createElement h2 nom = plat[i].nom
  createElement p description = plat[i].description
  createElement h3 price = plat[i].price
  createElement button
  button.id = plat[i].id
  button.textContent = "Ajouter"

  plat => append(nom)
  plat => append(description)
  plat => append(price)
  plat => append(button)


  containerPlat.appendChild(plat)
}

var createPlats =>  {
  loopFor (i in plats) {
    createPlat();
  }
}  

createPlats();
