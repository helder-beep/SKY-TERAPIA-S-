import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Exemplo de redirecionamento de URLs antigas para as novas rotas do site.
  // Adicionar aqui os redirects 301 específicos de um projeto real, ex:
  // app.all("/pagina-antiga*", (_req, res) => {
  //   res.redirect(301, "/nova-pagina");
  // });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
