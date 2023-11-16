import CoursesList  from "../models/courses/ListCourses";
import Courses from "../models/courses/Courses";

const list = new CoursesList()

export const buscarTodosOsCursos = (req, res) => {
    const cursos = list.getAllCursos();

    if (!cursos.length) {
        return res.status(404).send({ message: 'Nenhum curso cadastrado', status: 'Not Found' })
    }
    return res.status(200).send({message: 'Todos os cursos via controller', status: 'OK', data: cursos })
};

export const buscarCursoPorId = (req, res) => {
    const { id } = req.params
    const cursos = list.getCursosById(id);

    if (!cursos) {
        return res.status(404).send({ message: 'Curso não encontrado', Origem: 'Controller' })
    }
    return res.status(200).send({ menssage: `Cursos com ID ${id}`, Origem: 'Controller', data: cursos})
};

export const criarCurso = (req, res)=> {
    const { nome, descricao, limiteVagas } = req.body;
    
    if(!nome || !descricao || !limiteVagas) {
        return res.status(400).send({message: "Dados Inválidos", origem: 'Controller'})
    }

    const courses = new Courses(nome, descricao, limiteVagas)
    list.createCourses(courses)

    return res.status(201).send({message: "Rota POST Cursos", origem: 'Controller', data: courses})
};

export const editarCursoPorId = (req, res)=> {
    const { id } = req.params
    const { nome, descricao, limiteVagas } = req.body;
    
    if(!nome || !descricao || !limiteVagas) {
        return res.status(400).send({message: "Dados Inválidos"})
    }

    
    const courses = list.getCoursesById(id)

    if (!courses) {
        return res.status(404).send({ message: 'Cursos não encontrado', Origem: 'Controller' })
    }

    const coursesUpdate = list.updateCourses(id, nome, descricao, limiteVagas);

    return res.status(201).send({message: `Rota PUT aluno com ID ${id}`, data: coursesUpdate})
};

export const deletarCursoPorId = (req, res) => {
    const { id } = req.params
    const courses = list.getCoursesById(id)

    if (!courses) {
        return res.status(404).send({ message: 'Curso não encontrado', Origem: 'Controller' })
    }

    list.removeCourses(id);
    return res.status(201).send({message: `Rota DELETE curso com ID ${id}`, data: courses })
};