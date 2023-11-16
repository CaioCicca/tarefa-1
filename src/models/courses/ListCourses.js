export default class CoursesList {
    constructor() {
        this.courses = [];
    }

    getAllCourses() {
        return this.courses;
    }

    getCoursesById(id) {
        return this.courses.find(courses => {
            courses.id === id
        });
    }

    createCourses(courses) {
        this.courses.push(courses);
    }

    updateCourses(id, name, description, max) {
        const courses = this.getCoursesById(id);

        if (!courses) {
            return null
        }

        courses.name = name;
        courses.description = description;
        courses.max = max;

        return courses;
    }

    removeCourses(coursesId) {
        this.courses = this.courses.filter(courses => {
            courses.id !== coursesId
        });
    }
}