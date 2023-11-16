import { Router } from "express";
import rotasAlunos from "./students.routes.js";
import rotascursos from "./corses.routes.js";

const rotas = Router()

rotas.use("/alunos", rotasAlunos);
rotas.use("/cursos", rotascursos);

rotas.get("/", (req, res) => {
    return res.status(200).send({message: "Servidor OK!"})
});

export default rotas