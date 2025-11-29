# 




## Objectif du projet

L’objectif principal de ce frontend est de fournir une interface utilisateur simple, fonctionnelle et sécurisée pour l’application TalAIt, permettant aux utilisateurs de :

   - Se connecter via une page Login sécurisée.

   - Créer un compte via une page Signup.

   - Accéder à un outil de traduction via la page Translate, avec la possibilité de changer la langue (FR → EN ou EN → FR) et de visualiser immédiatement le texte traduit.


## Structure du projet
```frontend/
│
├── images/
│   └── background.jpg
│
├── login/
│   ├── page_login.html
│   ├── login.css
│   └── login.js
│
├── signup/
│   ├── page_signup.html
│   ├── signup.css
│   └── signup.js
│
├── translate/
│   ├── page_translate.html
│   ├── translate.css
│   └── translate.js
│
├── Dockerfile
└── README.md
          

```


---

## Fonctionnalités

### Signup
- Saisie des informations pour créer un compte
- Validation simple côté frontend
- Redirection vers la page **Login** après inscription

### Login
- Saisie du **username** et du **password**
- Validation simple cote frontend
- Possibilité de rediriger vers la page **Signup** ou **Translate** après connexion

### Translate
- Deux champs de texte : un pour entrer le texte, un autre pour afficher le texte traduit
- Possibilité de changer la langue : `FR → EN` ou `EN → FR`
- Interaction simple cote frontend (JavaScript)

---

## Installation & Exécution

###  Docker
1. Construire l'image Docker :

```shell
docker build -t frontend-app .

```

2. Lancer le contaire:

```shell
docker run -p 8080:80 frontend-app

```

3. Acceder a l'application dans le navigateur:

```shell
 http://localhost:8080/login/page_login.html

```

## Communication avec le Backend

Le frontend communique avec le backend FastAPI via :

### Endpoint signup 
```shell
POST /signup
```

### Endpoint Login
```shell
POST /login
```
### Endpoint translate

```shell
POST /translate
Authorization: Bearer <token>
```

### Important
Le backend doit être lance avant d’utiliser le frontend :

```shell
uvicorn app.main:app --reload
```

## Technologies utilisées

   - HTML

   - CSS

   - Vanilla JavaScript

   - API Fetch

   - LocalStorage pour stocker le token
