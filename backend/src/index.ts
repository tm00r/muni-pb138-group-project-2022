import express from "express";
import {shoppingList, order, steps} from "./resources";
import cors from "cors";

const api = express();
const port = process.env.PORT ?? 4000;

api.use(express.json());
api.use(cors());

api.get("/order", order.get)
api.post("/order", order.store)

api.get("/shoppingList/:id", shoppingList.get)

api.get("/steps/:id", steps.get)


api.listen(port, () => console.log(`OrderHub app listening on port ${port}`));
