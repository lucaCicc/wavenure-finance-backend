import express, { Express } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";

const app: Express = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Working");
// });

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log("App working!");
});
