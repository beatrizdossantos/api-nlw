import "reflect-metadata"
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(router);
app.listen(1234, () => console.log("O servidor está rodando!"));