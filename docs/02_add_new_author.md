# Ajouter un nouvel autheur au blog

Pour ajouter un nouvel auteur pour le blog, vous devez suivre ces étapes :

1. **Ajoutez les informations de l'auteur dans le fichier CSV des auteurs.** Ce fichier contient les informations sur tous les auteurs. Vous devez ajouter une nouvelle ligne avec les informations de l'auteur, en respectant le format suivant :

```csv
id, name, surname, linkedin, x
```

- `id` : Un identifiant unique pour l'auteur.
- `name` : Le prénom de l'auteur.
- `surname` : Le nom de famille de l'auteur.
- `linkedin` : (Optionnel) Le lien vers le profil LinkedIn de l'auteur.
- `x` : (Optionnel) Autres informations ou liens pertinents pour l'auteur.

**Le fichier CSV des auteurs se trouve dans le dossier `public/config/authors.csv`.**

2. **Utilisez l'ID de l'auteur dans le fichier Markdown de l'article.** Lorsque vous créez ou modifiez un fichier Markdown pour un article de blog, vous pouvez spécifier l'ID de l'auteur dans les métadonnées en haut du fichier, comme montré ci-dessous :

```markdown
---
authorId: ID de l'auteur
---
```

Remplacez `ID de l'auteur` par l'identifiant unique que vous avez attribué à l'auteur dans le fichier CSV.

Ces étapes permettent d'associer un auteur à un article de blog et d'afficher correctement les informations de l'auteur sur le blog.
