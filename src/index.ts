import "dotenv/config";
import { env } from "./config/env";

import app from './app';

const port = env.PORT;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});