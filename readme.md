# Form Validator

Validation de formulaire côté client en **HTML, CSS et JavaScript pur**.  
Le projet vérifie les champs obligatoires, la longueur des saisies, le format de l’email et la correspondance des mots de passe.

## Présentation

Ce dépôt contient un exemple simple et pédagogique de validation de formulaire :

- interface de formulaire claire et responsive ;
- messages d’erreur affichés sous chaque champ ;
- état visuel succès/erreur sur chaque contrôle ;
- règles de validation centralisées en JavaScript.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Maevamaignann/form-validator.git
   ```

2. Ouvrez le dossier du projet :

   ```bash
   cd form-validator
   ```

3. Lancez le projet en ouvrant `index.html` dans votre navigateur.

## Utilisation

Renseignez les champs du formulaire puis soumettez :

- **Champs obligatoires** : vérifie que chaque champ est rempli.
- **Longueur minimale / maximale** : appliquée aux champs concernés.
- **Email** : validé via une expression régulière.
- **Confirmation du mot de passe** : doit correspondre au mot de passe principal.

## Structure du projet

- `index.html` : structure du formulaire
- `style.css` : mise en forme et états visuels
- `script.js` : logique de validation

## Contribution

Les contributions sont les bienvenues.

1. Créez une branche dédiée à votre changement.
2. Faites vos modifications de manière ciblée.
3. Ouvrez une Pull Request avec une description claire.
