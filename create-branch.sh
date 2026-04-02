#!/bin/bash

# Script pour créer une branche git avec type + description

# 1️⃣ Choisir le type
echo "Choisis le type de branche :"
select type in feature task fix; do
    if [[ -n "$type" ]]; then
        break
    else
        echo "Choix invalide. Essaie encore."
    fi
done

# 2️⃣ Demander la description
read -p "Description de la branche : " description

# 3️⃣ Convertir en kebab-case
branch_name=$(echo "$description" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')

# 4️⃣ Préfixer avec le type
branch_name="${type}/${branch_name}"

# 5️⃣ Vérifier si la branche existe déjà
if git show-ref --verify --quiet "refs/heads/$branch_name"; then
    echo "❌ La branche $branch_name existe déjà."
    exit 1
fi

# 6️⃣ Créer et switcher sur la branche
git checkout -b "$branch_name"

echo "✅ Branche créée et positionnée : $branch_name"