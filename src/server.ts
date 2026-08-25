import { createApp } from "./app.js";
import { getEnvironment } from "./config/environment.js";

const environment = getEnvironment();
const app = createApp();

app.listen(environment.port, () => {
  console.log(`RFCPTY disponible en ${environment.publicOrigin}`);
});

