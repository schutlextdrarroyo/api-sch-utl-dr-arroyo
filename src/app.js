import express from "express";
import morgan from "morgan";

import routes from "./routes/routes";

const app = express()

// Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/schutl-api/", routes);

export default app;