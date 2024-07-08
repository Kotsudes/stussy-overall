# Stussy

Stussy est une application ayant pour but de simplifier le processus de production de contenu multimédia du type visuel (poster, bannière, etc) et textuel (tweet, petite annonce, etc). Son fonctionnement repose sur la création de template puis de leur réutilisation afin de créer des variations d'un même contenu.

# Organisation

Le dossier [`src`](https://github.com/Kotsudes/stussy-overall/tree/main/src) contient le code source de la WebView créée par Tauri.

Le dossier [`src-tauri`](https://github.com/Kotsudes/stussy-overall/tree/main/src-tauri) contient le code source de l'application Tauri.

# Développement

Pour pouvoir développer et tester la plateforme chez vous, vous devez avoir [Node.js](https://nodejs.org/fr) (version 20.12.2+). Il vous faudra également rust et tauri. Vous trouverez toutes les instructions pour installer ces deux dépendances dans ce [tutoriel](https://tauri.app/fr/v1/guides/getting-started/prerequisites). Enfin, il vous faudra avoir installé [`pnpm`](https://pnpm.io/installation).

## Installation

Une fois les dépendances installés, il vous faudra vous placer dans un dossier qui accueillera le dossier du projet. Une fois cela fait, réalisez les instructions suivantes :
- Cloner le projet avec la commande `git clone`
- Naviguer dans le dossier du projet
- Installer les dépendances avec `pnpm install`
- Lancer l'application avec `pnpm tauri dev`
> Attention ! La commande `pnpm dev` lance le serveur [Next.js](https://nextjs.org/) sans l'application Tauri


## Compilation

Les instructions et spécificicités liées à la compilation sont expliqués dans la [documentation](https://tauri.app/fr/v1/guides/building/) de Tauri.
Vous pouvez lancer la compilation de l'application avec la commande suivante : `pnpm tauri build`.


# Contribution
Pour pouvoir contribuer au développement, vous devez faire partie de l'équipe technique du SGN.

Voici les étapes pour développer une feature ou régler un bug:

- Créer une issue décrivant le problème/la fonctionnalité de façon précise mais concise
- Créer une branche nommée `dev-[numéro de l'issue]` et faites vos commit dessus
- Créer une pull request en mettant au début de la description `resolve #[numéro de l'issue]`
- Une fois la review effectuée, merger votre branche en faisant un "Squash and merge"

# License
Stussy n'est pas open source et il n'y a à ce jour, aucun projet de la rendre open source.
