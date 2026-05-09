import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import { mountSite } from "./middlewares/serve-site";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Serve consulting-site's prerendered HTML + assets after /api so analyzer
// streaming, intake, stats, and Stripe routes retain priority. Toggle off
// with SERVE_SITE=false (e.g. for an api-only deployment).
if (process.env["SERVE_SITE"] !== "false") {
  mountSite(app);
}

export default app;
