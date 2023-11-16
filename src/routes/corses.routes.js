import { Router } from "express";
import { 
    criarCurso,
    buscarCursoPorId, 
    buscarTodosOsCursos, 
    editarCursoPorId,
    deletarCursoPorId
} from "../controllers/corses.controller.js";

const rotascursos = Router();

rotascursos.get("/" , buscarTodosOsCursos);

rotascursos.get("/:id" , buscarCursoPorId);

rotascursos.post("/" , criarCurso);

rotascursos.put("/:id" , editarCursoPorId);

rotascursos.delete("/:id", deletarCursoPorId);

export default rotascursos;