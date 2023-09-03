import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import RplRoute from "./routes/RplRoute.js";
 
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(RplRoute);
 
app.listen(5000, ()=> console.log('Server jalan cuyyy...'));