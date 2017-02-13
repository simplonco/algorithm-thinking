# algorithm-thinking
Comment penser code pour mieux écrire du code

## Présentation

### Qu'est ce que l'algorithme ?
### Les algorithmes célébres
 -  google
 -  facebook
 -  Trouver le chemin le plus court (path-finding)

### Pour nous, l'algorithme, c'est quoi ?

- Une façon de réfléchir
- ...
- Des ordres qu'on donne à une machine

### Exercice 1 : La machine à qui vous donner des ordres :

Imaginez une action simple que vous aimeriez faire executer à une machine. 

Cette machine à tout ce qui faut pour le faire (des bras, des jambes, des yeux... à vous d'imaginer votre machine selon l'action que vous souhaitez lui faire éxécuter) sauf qu'elle n'a aucune intelligence. Il va falloir tout lui écrire précisement dans le bonne ordre pour qu'elle puisse l'executer. Cette machine a une très bonne mémoire. Elle peut y stocker toute sorte de chose et d'action.

Imaginez donc les ordres que vous donneriez à cette machine pour qu'elle arrive à executer :
 * les actions pour arriver à executer l'action globale
 * les sous-actions pour arriver à executer ces actions
 * etc... si besoin, on decoupe en plus petites étapes
 * et il faut lui dire de stocker tout ça dans sa memoire pour qu'elle puisse les executer de nouveau.
 
NB : pensez bien à décomposer les actions pour que la machine ne fasse pas n'importe quoi !
 
#### On a donc besoin :

- d'un but : une phrase que commence par "je veux que la machine"
- une façon d'ecrire les ordres. Vos machines ont toutes en commun les capacités suivantes :


#### Exemples :
* Je veux que la machine trouve du chocolat
* Je veux que la machine compte mes doigts
* Je veux que la machine cueille des pommes
* Je veux que la machine écrive "bonjour" sur mon clavier
* Je veux que la machine me reveille à 7h00

### Les règles

- Chaque verbe ou action est une **function**
- Chaque chose est un **object** (une string est un objet, un tableau est un objet)
- Chaque nom lié à un **object** par une relation d'appartenance est une **property**
- Chaque verbe qui peut être lié à un **object** par une relation d'appartenance est une **method** de cet **object**
- Chaque **object** que vous devez garder en mémoire devient une **variable**. On peut aussi dire qu'elle est stocké comme **variable**
- Chaque **function** que vous devez garder en mémoire devient une **variable**. On peut aussi dire qu'elle est stocké comme **variable**
- Chaque liste de chose ou collection de chose est un **array** (tableau)
- Si vous devez executer une action sur chaque element d'un tableau, vous dite que vous executer une **loop** (boucle) sur ce tableau. A chaque itération, vous executez l'action sur l'element courant.

**ÉCRIVEZ LA SUITE D'ORDRE A DONNER A LA MACHINE DANS UN EDITEUR DE TEXTE**

### Exercice 2 : L'ordinateur à qui vous donner des ordres :

- Il va falloir écrire tout ça en pseudo-code
 
### La phrase qui commence par "je veux"


## Exercices algorithmes :
BRIEF : Je voudrais un programme qui addition les 2 chiffres qu'en tu lui donne en entree.


### STEP 1 : Ecrivez votre pseudo code sur papier

- Chaque action est une function
- Chaque élément que vous devez garder en mémoire est une variable
- Chaque liste est un tableau
- Si vous devez executer une action sur chaque element d'un tableau, vous untilisez une boucle

### STEP 2 : FAITES VOTRE PROGRAMME EN NODEJS
——————

## Quelques références
https://www.grafikart.fr/formations/apprendre-algorithmique/
http://silentteacher.toxicode.fr/
https://www.kwyk.fr/algorithme/
https://www.tutorialspoint.com/data_structures_algorithms/data_structure_overview.htm
http://www.geeksforgeeks.org/fundamentals-of-algorithms/
