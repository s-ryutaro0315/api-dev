import app from './app';

import "dotenv/config";
import { env } from "./config/env";

const port = env.PORT;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
