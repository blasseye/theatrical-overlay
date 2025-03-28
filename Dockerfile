FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js ./server.js

COPY data ./data

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY data ./data_init

# Définir la variable d'environnement STREAMER_NAME avec une valeur par défaut
ENV STREAMER_NAME="twitch"

EXPOSE 3000
CMD ["node", "server.js"]