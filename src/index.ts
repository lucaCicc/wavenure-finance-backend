import express, { Express } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes/main.route";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middelwares/errors";

export const prismaCLient = new PrismaClient({
  log: ["query"],
});

const app: Express = express();

app.use(express.json());
app.use("/api/v1", rootRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("App working!");
});
