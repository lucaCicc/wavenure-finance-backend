import express, { Express, Request } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middelwares/errors";
import { SignUpSchema } from "./schema/users";

export const prismaCLient = new PrismaClient();

const app: Express = express();

// app.get("/", (req, res) => {
//   res.send("Working");
// });

app.use(express.json());
app.use("/api", rootRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("App working!");
});
