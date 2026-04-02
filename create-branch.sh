#!/bin/bash

# 1️⃣ Choose branch type with shortcut
echo "Choose branch type: f = feature / t = task / x = fix"
read TYPE_SHORT

case "$TYPE_SHORT" in
  f) TYPE="feature"; CHANGESET_TYPE="major";;
  t) TYPE="task";    CHANGESET_TYPE="minor";;
  x) TYPE="fix";     CHANGESET_TYPE="patch";;
  *) echo "Invalid type! Use f, t, or x."; exit 1;;
esac

# 2️⃣ Ask for a readable description
echo "Description:"
read DESC

# 3️⃣ Create a "safe" branch name: lowercase + spaces replaced by -
DESC_SAFE=$(echo "$DESC" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

BRANCH_NAME="$TYPE/$DESC_SAFE"

# 4️⃣ Create the git branch
git checkout -b "$BRANCH_NAME"

# 5️⃣ Get the package name from package.json
PACKAGE_NAME=$(jq -r .name package.json)
if [ -z "$PACKAGE_NAME" ]; then
  echo "Error: could not read package name from package.json"
  exit 1
fi

# 6️⃣ Create the changeset file with the correct frontmatter
mkdir -p .changeset
CHANGESET_FILE=".changeset/$(date +%Y%m%d)-$DESC_SAFE.md"

cat <<EOL > "$CHANGESET_FILE"
---
"$PACKAGE_NAME": $CHANGESET_TYPE
---

$DESC
EOL

echo "Branch '$BRANCH_NAME' created and changeset generated: $CHANGESET_FILE"

# 7️⃣ Optional: run `npx changeset add` to prepare versioning
# npx changeset add