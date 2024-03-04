import {test} from '@playwright/test';
import{Student} from '../models/student'; //ต้องตั้งค่าไฟล์ที่เอามาเป็น export ด้วย

test('basic demo class student',async() => {
    let studentA = new Student ('John', 'DASDASDASDSD', 17,5);
    const fullnameA =studentA.getFullname();
    console.log(fullnameA);
    console.log(studentA.getGrade());
    studentA.setGrade(6);//set new grade
    console.log(studentA.getGrade());
});