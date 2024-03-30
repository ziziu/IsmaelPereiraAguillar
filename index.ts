// Libs
import express, { Request, Response } from "express";
import helmet from "helmet";

// Data
const PORT = 8080;
const app = express();

// Code
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.all("/", (req: Request, res: Response) => {
  res.sendFile("./public/index.html");
});

app.listen(PORT, () => {
  console.info(`The server is running on port: ${PORT}`);
});
