import { Router } from "express";
import { 
    criarAluno,
    buscarAlunosPorId, 
    buscarTodosAlunos, 
    editarAlunoPorId,
    deletarAlunoPorId
} from "../controllers/students.controller.js";

const rotasAlunos = Router();

rotasAlunos.get("/" , buscarTodosAlunos);

rotasAlunos.get("/:id" , buscarAlunosPorId);

rotasAlunos.post("/" , criarAluno);

rotasAlunos.put("/:id" , editarAlunoPorId);

rotasAlunos.delete("/:id", deletarAlunoPorId);

export default rotasAlunos;
