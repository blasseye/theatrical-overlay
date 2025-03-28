#!/bin/sh
# Copier les fichiers initiaux uniquement si le dossier est vide
if [ -z "$(ls -A /app/data)" ]; then
  echo "Copie des fichiers initiaux dans /app/public..."
  cp -r /app/data_init/* /app/data/
fi

# Lancer l'application
exec npm start