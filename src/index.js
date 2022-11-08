import localtunnel from "localtunnel";
import express, { Router } from "express";
const routes = new Router();
const server = express();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

server.use(routes);

(async () => {
  server.listen(9090, async () => {
    const url = await localtunnel({
      port: 9090,
      subdomain: "mylocalhost",
    });

    console.log(`${url.url}`);
  });
})();
