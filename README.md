# Orbjs

Ce package JS regroupe différents helpers/libs génériques utilisable sans avoir à être dans le contexte d'un projet.
Les outils sont rédigés en typescript puis buildés en JS avec déclaration et mapping.  
La documentation des outils est disponible sur le live

Les features sont regroupées dans des sous packages pour éviter des conflits de noms entre features.

La liste des sous packages :

    "format_helpers",
    "geo",
    "lang",
    "opening_hour",
    "rules",
    "upload"

Cette liste correspond aux dossiers présents dans `/src` et doit être synchronisée entre la propriété `files` du package.json principal, la liste dans la propriété `exports` de ce même fichier et la liste dans le script `generatePackagesJson.js`.

## Créer une nouvelle feature

Si c'est dans un sub package existant, il suffit alors de rajouter le feature dans le dossier correspondant, soit dans un fichier existant, soit dans un nouveau si besoin. D'exporter cette méthode dans le fichier `index.ts` du sub package et dans le fichier `index.ts` principale.

S'il est nécessaire de créer un nouveau sub package il faut alors créer un nouveau dossier dans `/src`.
Il faut dans le dossier de ce nouveau sub package créer un fichier `index.ts` pour déclarer les exports, il faudra également déclarer les exports dans le fichier `index.ts` principal.
Il faut ensuite déclarer ce nouveau dossier dans la propriété `files` du package.json principal, dans la liste dans la propriété `exports` de ce même fichier et dans la liste dans le script `generatePackagesJson.js`.

## Build

La documentation pour la partie build est disponible sur le live
