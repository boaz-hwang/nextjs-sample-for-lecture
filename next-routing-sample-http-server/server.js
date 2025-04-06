// server.js
const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const { URL } = require("url");

const PORT = 3000;
const routes = new Map();

function matchRoute(pathname) {
  // Handle root path specially
  if (pathname === "/") {
    return routes.has("/") ? { handler: routes.get("/"), params: {} } : null;
  }

  for (let [route, handler] of routes) {
    const routeParts = route.split("/").filter(Boolean);
    const pathParts = pathname.split("/").filter(Boolean);

    if (routeParts.length === pathParts.length) {
      const params = {};
      const match = routeParts.every((routePart, i) => {
        if (routePart.startsWith("[") && routePart.endsWith("]")) {
          params[routePart.slice(1, -1)] = pathParts[i];
          return true;
        }
        return routePart === pathParts[i];
      });

      if (match) {
        return { handler, params };
      }
    }
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  console.log(`Received request for: ${pathname}`);

  const route = matchRoute(pathname);

  if (route) {
    console.log(`Matched route: ${JSON.stringify(route)}`);
    const { handler, params } = route;
    req.params = params;
    try {
      const html = await handler(req, res);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 Internal Server Error</h1>");
    }
  } else {
    console.log(`No route found for: ${pathname}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

async function buildRoutes(dir, baseRoute = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const route = path.join(baseRoute, entry.name.replace(/\.js$/, ""));

    if (entry.isDirectory()) {
      await buildRoutes(fullPath, route);
    } else if (entry.isFile() && entry.name === "page.js") {
      let routePath = route === "page" ? "/" : route.replace(/\/page$/, "");
      routes.set(routePath, require(fullPath));
    }
  }
}

// Build routes and start server
buildRoutes(path.join(__dirname, "app"))
  .then(() => {
    console.log("Registered routes:");
    for (let [route, handler] of routes) {
      console.log(route);
    }
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
