import {v4 as uuidv4} from "uuid"

export default class Courses {
    constructor(name, description, max){
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.max = max;
    }
}