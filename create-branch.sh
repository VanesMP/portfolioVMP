#!/bin/bash

# 1️⃣ Choix du type de branche avec raccourci
echo "Choisis le type de branche : f = feature / t = task / x = fix"
read TYPE_SHORT

case "$TYPE_SHORT" in
  f) TYPE="feature"; CHANGESET_TYPE="major";;
  t) TYPE="task";    CHANGESET_TYPE="minor";;
  x) TYPE="fix";     CHANGESET_TYPE="patch";;
  *) echo "Type invalide ! Utilise f, t ou x."; exit 1;;
esac

# 2️⃣ Demander la description lisible
echo "Description (ex: ajout d'un header) :"
read DESC

# 3️⃣ Créer un nom de branche "safe" : minuscules + espaces remplacés par -
DESC_SAFE=$(echo "$DESC" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

BRANCH_NAME="$TYPE/$DESC_SAFE"

# 4️⃣ Créer la branche git
git checkout -b "$BRANCH_NAME"

# 5️⃣ Créer le fichier changeset avec la description originale
mkdir -p .changeset
CHANGSET_FILE=".changeset/$(date +%Y%m%d)-$DESC_SAFE.md"

cat <<EOL > "$CHANGSET_FILE"
---
"$CHANGESET_TYPE"
---

$DESC
EOL

echo "Branche '$BRANCH_NAME' créée et changeset généré : $CHANGSET_FILE"

# 6️⃣ Optionnel : lancer npx changeset add pour préparer le versionning
# npx changeset add