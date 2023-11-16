import {v4 as uuidv4} from "uuid"

export default class Student {
    constructor(name, email, age){
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.age = age;
    }
}