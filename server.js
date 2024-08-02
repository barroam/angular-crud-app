const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Définition des routes personnalisées
const customRoutes = {
  "/api/posts": "/posts",
  "/api/posts/:id": "/posts/:id",
  "/api/posts/:id/comments": "/comments?postId=:id",
  "/comments": "/comments"
};

// Ajout des routes personnalisées
server.use(jsonServer.rewriter(customRoutes));

// Utilisation des middlewares par défaut (logger, statique, cors et no-cache)
server.use(middlewares);

// Ajout du routeur de l'API
server.use(router);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
