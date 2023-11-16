import Student from "../models/students/Student.js";
import StudentsList from "../models/students/ListStudent.js";

const list = new StudentsList()

export const buscarTodosAlunos = (req, res) => {
    const students = list.getAllStudents();

    if (!students.length) {
        return res.status(404).send({ message: 'Nenhum aluno cadastrado', status: 'Not Found' })
    }
    return res.status(200).send({ message: 'Todos os alunos via controller', status: 'OK', data: students })
};

export const buscarAlunosPorId = (req, res) => {
    const { id } = req.params
    const student = list.getStudentsById(id);

    if (!student) {
        return res.status(404).send({ message: 'Aluno não encontrado', Origem: 'Controller' })
    }
    return res.status(200).send({ menssage: `Aluno com ID ${id}`, Origem: 'Controller', data: student })
};

export const criarAluno = (req, res) => {
    const { nome, email, idade } = req.body;
    if (!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos", origem: 'Controller' })
    }

    const student = new Student(nome, email, idade)
    list.createStudent(student)

    return res.status(201).send({ message: "Rota POST alunos", origem: 'Controller', data: student })
};

export const editarAlunoPorId = (req, res) => {
    const { id } = req.params
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos", origem: "Controller" });
    }

    const student = list.getStudentById(id)

    if (!student) {
        return res.status(404).send({ message: 'Aluno não encontrado', Origem: 'Controller' })
    }

    const studentUpdate = list.updateStudent(id, nome, email, idade);

    
    return res.status(201).send({ message: `Rota PUT aluno com ID ${id}`, data: studentUpdate})
};

export const deletarAlunoPorId = (req, res) => {
    const { id } = req.params

    const student = list.getStudentById(id)

    if (!student) {
        return res.status(404).send({ message: 'Aluno não encontrado', Origem: 'Controller' })
    }

    list.removeStudent(id);
    return res.status(201).send({ message: `Rota DELETE aluno com ID ${id}`, data: student })
};