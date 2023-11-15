const app = require("./src/app");
const port = 3000;

try {
  app.listen(port, () => {
    console.log(
      `SERVER RUNNING CHECK ENDPOINTS ON http://localhost:${port}/api-docs`
    );
  });
} catch (error) {
  console.error("Error starting the server:", error);
}