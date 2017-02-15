# algorithm-thinking
Comment penser code pour mieux écrire du code

## Présentation

### Qu'est ce que l'algorithme ?
### Les algorithmes célébres
 -  google
 -  facebook
 -  Trouver le chemin le plus court (path-finding)

### Pour nous, l'algorithme, c'est quoi ?

- Une façon de réfléchir et d'ecrire en pseudo-code
- ...
- Des ordres qu'on donne à une machine

### Exercice 1 : La machine à qui vous donner des ordres :

Imaginez une action simple que vous aimeriez faire executer à une machine. 

Cette machine posséde tout ce qui faut pour le faire (des bras, des jambes, des yeux... à vous d'imaginer votre machine selon l'action que vous souhaitez lui faire éxécuter).

Mais elle n'a aucune intelligence. 

Il va falloir tout lui écrire précisement dans le bonne ordre pour qu'elle puisse l'executer. 

Cette machine a une mémoire. Elle peut y stocker tout ce que vous lui ordonner de stocker à chaque etape. Il faut donc lui ordonner de stocker le resultat de chaque action afin de pouvoir utiliser ce resultat à l'etape suivante.

Imaginez donc les ordres que vous donneriez à cette machine pour qu'elle arrive à executer l'action désirée :

 * les actions pour arriver à executer l'action désirée
 * les sous-actions pour arriver à executer ces actions
 * etc... si besoin, on decoupe en plus petites étapes
 * et il faut lui dire de stocker en mémoire les elements necessaires à l'étape suivante.
 
NB : pensez bien à décomposer les actions pour que la machine ne fasse pas n'importe quoi !
 
#### On a donc besoin :

- d'un but : une phrase que commence par "je veux que la machine"

``` 
   Exemples de but :
   Je veux que la machine :
   * compte mes doigts
   * cueille des pommes
   * écrive "bonjour" sur mon clavier
   * me reveille à 7h00
``` 

- d'une machine avec des capacités matérielles définies

``` 
   Exemples de description de machine :
   Ma machine a :
   * une mémoire (par défaut)
   * une camera
   * un bras articulé
   * un petit écran
``` 

- une façon d'ecrire les ordres concise et rigoureuse. 

``` 
  Exemple d'etapes 1 (mauvais algorithme) :
  1. Attraper et lever ma main droite jusqu'à camera
  2. stocker en memoire cette main sous le nom : mainDroite
  3. Reserver espace memoire pour un nombre sous le nom : nombreDeDoigts
  4. Regarder mainDroite
  5. Si nombre de doigt est 1, nombreDeDoigts = 1
  6. Si nombre de doigt est 2, nombreDeDoigts = 2
  ...
  
  Exemple d'etapes 2 (meilleur algorithme) : 
  1. Attraper et lever ma main droite jusqu'à camera
  2. stocker en memoire cette main sous le nom : mainDroite
  3. Reserver espace memoire pour un nombre sous le nom : nombreDeDoigts
  4. Ecrire en memoire que nombreDeDoigts est égale à 0
  5. Regarder avec la camera chaque doigt de **mainDroite** l'un après l'autre en allant de droite à gauche
  6. A chaque doigt, ajouter 1 à la valeur de nombreDeDoigts
  7. Quand il n'y a plus de doigt vers la gauche, montrer la valeur de nombreDeDoigts à l'ecran
  
```

**ÉCRIVEZ LA SUITE D'ORDRE A DONNER A LA MACHINE DANS UN EDITEUR DE TEXTE**

### Exercice 2 : L'ordinateur à qui vous donner des ordres :

Vos machines ont maintenant toutes un language commun :

- Chaque verbe ou action est une **function**
- Chaque chose est un **object** (une string est un objet, un tableau est un objet)
- Chaque nom lié à un **object** par une relation d'appartenance est une **property**
- Chaque verbe qui peut être lié à un **object** par une relation d'appartenance est une **method** de cet **object**
- Chaque **object** que vous devez garder en mémoire devient une **variable**. On peut aussi dire qu'elle est stocké comme **variable**
- Chaque **function** que vous devez garder en mémoire devient une **variable**. On peut aussi dire qu'elle est stocké comme **variable**
- Chaque liste de chose ou collection de chose est un **array** (tableau)
- Si vous devez executer une action sur chaque element d'un tableau, vous dite que vous executer une **loop** (boucle, for, while, forEach, ...) sur ce tableau. A chaque itération, vous executez l'action sur l'element courant.
- Un groupe d'action peut être représenté par une **function**
``` 

------------

Exemple : Pré-pseudo code

------ 
Executer la methode regarde de camera avec en parametre main
camera.regarde(main)
------
Executer la fonction move pour la camera avec comme cible la main
move(camera, main)
------
Je stocke les objets plus grand que mes lunettes sous le nom listeObjects
==>
var listeObjects = recupererObjectsCacheur()
------
var move  = function (objet, cible) {
 ......
}
------
var boite = getBox();
var graines = recupererTouteLesGraines()

pourChaqueGraineDans(graines) -> graine.bougeVers(boite)
------

checkHuman(cameraImage)

------

var boxTemplate = getNetworkBoxTemplate()

if exist(boxTemplate) 
 alors suiteDesOrdre()
else
 stopExecutionDesOrdre()
 alert('probleme de network')
 
------

// REVEIL DE FAUSTINO

STEP1 
waitFor (WeigthDetector.detetectBody() === true)
STEP2 //body detected
var wakeUpTime = calcultateWakUpTime(currentTime, +8)
STEP3 
waitFor (currentTime === wakeUpTime) // IL ATTEND QUE TE TEMPS PASSE
STEP4 // currentTime === wakeUpTime
ring()

--------

Exemple en français :
  1. var main = brasArticule.attrapeMain('droite')
  2. camera.regarde(main)
  3. var nombreTotalDoigts = 0 
  3. main.doigts.forEach(doigt) { nombreTotalDoigts = nombreTotalDoigts + 1 }
  4. console.log(nombreTotalDoigts)

``` 

```
Exemple en anglais :
  1. var hand = mechanicalArm.getHand('right')
  2. camera.lookAt(hand)
  3. var fingerTotal = 0 
  3. hand.fingers.forEach(finger) { fingerTotal = fingerTotal + 1 }
  4. console.log(fingerTotal)

``` 

### Exercice 3 : FAIRE LE MEME EXERCICE POUR LA LISTE DE PLAT DU PROJET GERTRUDE

Considérons un conteneur html vide :

```
<div class="container plats"></div>
```
et un tableau de plats
```
{
 plats: [
   {
    id: 1,
    nom: 'plat1',
    description: 'blablabla 1',
    price: '12€',
    selected: 0
   },
   {
    id: 2,
    nom: 'plat2',
    description: 'blablabla 2',
    price: '15€',
    selected: 0
   },
   {
    id: 3,
    nom: 'plat3',
    description: 'blablabla 3',
    price: '10€',
    selected: 0
   }
 ]
}
```

Insérez dans le conteneur html autant d'elements html qu'il y en a de plats dans le tableau. 

Chaque element html doit afficher le nom, la description, le prix d'un element html.

Chaque element doit comprendre un bouton "ajouter" qui servira ulterieurement.`

#### Steps

* RANDOM GROUPE DE 3 ! (random.org)
* Faire un repo ou forker celui-là
* Ecrire les etapes en pseudo-code dans le readme.md
* Créer la page index.html et le fichier javascript
* Ecrire le code javascript **en reprenant bien les noms de fonction du pseudo code**
* "Push" votre travail sur le repo distant
* Créer la github page et m'envoyer l'url


### Exercice 4 : FAIRE LE MEME EXERCICE POUR LE PANIER DE GERTRUDE

 - Ecrire l'action : Ajouter au panier
 - Ecrire l'action : Supprimer du pannier

#### Steps

* Ecrire les etapes en pseudo-code de chaque action dans le readme.md
* Ecrire le code javascript **en reprenant bien les noms de fonction du pseudo code**
* "Push" votre travail sur le repo distant
* m'envoyer l'url de la github page

——————

## Quelques références
* https://www.grafikart.fr/formations/apprendre-algorithmique/
* http://silentteacher.toxicode.fr/
* https://www.kwyk.fr/algorithme/
* https://www.tutorialspoint.com/data_structures_algorithms/data_structure_overview.htm
* http://www.geeksforgeeks.org/fundamentals-of-algorithms/
* https://pdf.k0nsl.org/C/Computer%20and%20Internet%20Collection/2015%20Computer%20and%20Internet%20Collection%20part%209/Packt%* 20Publishing%20Learning%20JavaScript%20Data%20Structures%20and%20Algorithms%20(2014).pdf
* https://www.programiz.com/article/algorithm-programming
