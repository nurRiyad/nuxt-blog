# Publier un article sur le blog HoppR

Pour publier un article sur ce blog, suivez ces étapes :

1. **Créez un fichier Markdown pour votre article** dans le dossier `content/blogs`. Le nom du fichier doit être descriptif et suivre une nomenclature spécifique pour faciliter l'organisation et la recherche. Utilisez le format suivant : `IDauteur-titre-article-simplifie.md`, où `IDauteur` est l'identifiant unique de l'auteur et `titre-article-simplifie` est une version simplifiée du titre de l'article, avec les espaces remplacés par des tirets (-) et les caractères spéciaux omis ou simplifiés. Par exemple : `42-mon-premier-article-sur-le-cloud.md`.

2. **Structurez votre fichier Markdown** avec les métadonnées nécessaires et le contenu de votre article. Utilisez le format suivant en haut de votre fichier :

```markdown
---
title: Titre de votre article
date: JJ MMM AAAA  # Exemple : 01 Jan 2023
description: Une courte description de votre article
image: /chemin/vers/l'image/de/couverture.jpg
alt: Texte alternatif pour l'image
ogImage: /chemin/vers/l'image/og.jpg
tags: ['tag1', 'tag2']
published: true
authorId: ID de l'auteur
---
```

L'option `published: true` dans les fichiers Markdown est utilisée pour indiquer si un article de blog est prêt à être publié et visible sur le site. Si cette option est définie sur `true`, l'article sera accessible aux visiteurs du site. Dans le cas contraire, si elle est définie sur `false` ou omise, l'article ne sera pas affiché publiquement.

Cette option est utile pour contrôler la visibilité des articles, permettant aux auteurs de préparer des contenus à l'avance sans les rendre immédiatement accessibles au public.

Pour plus de détails sur la création de contenu avec Nuxt Content, consultez la documentation officielle de [Nuxt Content v2](https://content.nuxtjs.org/).

Voici un exemple de fichier Markdown pour un article :

```markdown:content/blogs/mon-premier-article.md
---
title: Mon Premier Article
date: 01 Jan 2023
description: Cet article est un exemple de publication sur le blog HoppR.
image: /blogs-img/mon-premier-article.jpg
alt: Mon Premier Article
ogImage: /blogs-img/mon-premier-article-og.jpg
tags: ['craft', 'cloud']
published: true
authorId: 1
---

### Introduction

Bienvenue sur mon premier article de blog. Ceci est un paragraphe d'introduction où je parle de ce que vous allez apprendre.

### Corps de l'article

Ici, vous écrivez le contenu principal de votre article. Vous pouvez ajouter des sous-titres, des listes, des images, et plus encore.

### Conclusion

En conclusion, écrire un article sur le blog HoppR est simple. Suivez les étapes mentionnées ci-dessus pour publier votre propre article.
```

**Vous pouvez trouver des exemples d'articles dans le dossier [docs/examples](/docs/examples).**

Assurez-vous de remplacer les valeurs des métadonnées et le contenu par les informations de votre article.

3. **Ajoutez vos images dans le dossier [public/blogs-img](/public/blogs-img).** Pour les images associées à un article, suivez cette nomenclature : `IDauteur-titre-article-simplifie_type.jpg`, où `IDauteur` est l'identifiant unique de l'auteur, `titre-article-simplifie` est une version simplifiée du titre de l'article, et `type` indique la fonction de l'image (par exemple, `couverture`, `architecture-hexagonal`, `stats-recrutement`, etc.). Cela aide à organiser les images par article et par auteur, rendant les fichiers facilement identifiables et associés à leur contenu spécifique.

> Consultez le prochain tutoriel: [Ajouter un nouvel autheur au blog](/docs/02_add_new_author.md).
