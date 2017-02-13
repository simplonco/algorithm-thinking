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

Cette machine a une mémoire. Elle peut y stocker tous ce que vous lui ordonner de stocker à chaque etape. Il faut donc lui ordonner de stocker le resultatde chaque action afin de pouvoir utiliser ce resultat à l'etape suivante.

Imaginez donc les ordres que vous donneriez à cette machine pour qu'elle arrive à executer l'action désirée :

 * les actions pour arriver à executer l'action désirée
 * les sous-actions pour arriver à executer ces actions
 * etc... si besoin, on decoupe en plus petites étapes
 * et il faut lui dire de reserver de la mémoire puis de stocker dans cette espace les elements necessaires à l'étape suivante.
 
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
   * une camera
   * un bras articulé
   * une mémoire
``` 

- une façon d'ecrire les ordres concise et rigoureuse. 

``` 
  Exemple d'etapes 1 :
  1. Attraper et lever ma main droite jusqu'à camera
  2. stocker en memoire cette main sous le nom : mainDroite
  3. Reserver espace memoire pour un nombre sous le nom : nombreDeDoigts
  4. Regarder mainDroite
  5. Si nombre de doigt est 1, nombreDeDoigts = 1
  6. Si nombre de doigt est 2, nombreDeDoigts = 2
  ...
  
  Exemple d'etapes 2 (mieux) : 
  1. Attraper et lever ma main droite jusqu'à camera
  2. stocker en memoire cette main sous le nom : mainDroite
  3. Reserver espace memoire pour un nombre sous le nom : nombreDeDoigts
  4. Ecrire en memoire que nombreDeDoigts est égale à 0
  5. Regarder avec la camera chaque doigt l'un après l'autre en allant de droite à gauche
  6. A chaque doigt, ajouter 1 à la valeur de nombreDeDoigts
  7. Quand il n'y a plus de doigt vers la gauche, montrer nombreDeDoigts à l'ecran
  
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
- Si vous devez executer une action sur chaque element d'un tableau, vous dite que vous executer une **loop** (boucle) sur ce tableau. A chaque itération, vous executez l'action sur l'element courant.

``` 

Exemple :
  1. var bras = get('BrasDroit')
  1. BrasDroit.leverMain()
  2. var N = 0
  3. Main.doigts.forEach(doigt) { N = N + 1 }
  4. console.log(N)

``` 

### Exercice 3 : FAITES VOTRE PROGRAMME EN NODEJS
——————

## Quelques références
https://www.grafikart.fr/formations/apprendre-algorithmique/
http://silentteacher.toxicode.fr/
https://www.kwyk.fr/algorithme/
https://www.tutorialspoint.com/data_structures_algorithms/data_structure_overview.htm
http://www.geeksforgeeks.org/fundamentals-of-algorithms/
