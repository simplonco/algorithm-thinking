### algo carte

```
STEP 1
Déclare fonction containerPlat en js (stocker dans une var containerPlat), qui sert à stocker l'élément html qui a pour class container plats

STEP 2
Déclarer fonction createPlat qui a rôle de créer plusieurs élément html pour chaque objet du tableaux plat :  
- une div qui a pour class "plat"
- un h2 qui a pour class nom
- deux élément <p> ( un pour le descriptif et un pour le prix)
- un bouton qui servira a choisir son plat, il aura comme contenu "Ajouter"
cette fonction relira chaque élément crée précédemment a la div plat via une méthode plat.append(élémentHTML).
une autre méthode servira à relier l'élément html div "plat" à la variable containerPlat

STEP3
création d'une fonction (stocker elle même dans une variable createPlats) qui va itérer dans le tableaux plats, à chaque itération la fonction createPlat sera exécutée.
```
