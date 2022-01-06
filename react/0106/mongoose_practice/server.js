const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB');

const db = mongoose.connection;

db.on('error', () => {
    console.log('Connection Failed!')
});

db.once('open', () => {
    console.log('Connected!')
});

let student = mongoose.Schema({
    name: 'string',
    address: 'string',
    age: 'number'
});

let Student = mongoose.model('Schema', student);

// 저장하기
// let newStudent = new Student({ name: 'Hon', address: '서울', age: '22' });
// newStudent.save((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('new Student Saved ~~');
//     }
// });

// 특정아이디 가져오기
// Student.findOne({_id:'61d63affb9a0c68bc1e3a02d'}, function(error,student){
//     console.log('--- Read one ---');
//     if(error){
//         console.log(error);
//     }else{
//         console.log(student);
//     }
// });
// // 특정 아이디 수정하기
// Student.findById({_id:'61d63affb9a0c68bc1e3a02d'}, function(error,student){
//     console.log('--- Update(PUT) ---');
//     if(error){
//         console.log(error);
//     }else{
//         student.name = '--modified--';
//         student.save(function(error,modified_student){
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(modified_student);
//             }
//         });
//     }
// });

// 삭제
Student.remove({_id:'61d63bd1b49c201ab5efb452'}, function(error,output){
    console.log('--- Delete ---');
    if(error){
        console.log(error);
    }

    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
        어떤 과정을 반복적으로 수행 하여도 결과가 동일하다. 삭제한 데이터를 다시 삭제하더라도, 존재하지 않는 데이터를 제거요청 하더라도 오류가 아니기 때문에
        이부분에 대한 처리는 필요없다. 그냥 삭제 된것으로 처리
        */
    console.log('--- deleted ---');
});

// 전체 조회하기
Student.find((err, students) => {
    console.log('--- read all ---');
    if (err) {
        console.log(err);
    } else {
        console.log('students : ' , students);
    }
});