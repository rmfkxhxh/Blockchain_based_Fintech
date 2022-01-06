const Client = require('mongodb').MongoClient;

Client.connect('mongodb+srv://okopan:a12341234@okopan.itc6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(error, database){
    if(error) {
        console.log(error);
    } else {
        // 1. 입력할 documents 를 미리 생성
        var jordan = {name:'Jordan', age:16, gender:'M'};
        var amanda = {name:'Amanda', age:17, gender:'F'};
        var jessica = {name:'Jessica', age:15, gender:'F'};
        var james = {name:'James', age:19, gender:'M'};
        var catherine = {name:'Catherine', age:18, gender:'F'}

        // 2. insertMany( ) 함수에 배열 형태로 입력
        let db = database.db('school')
        db.collection('student').insertMany([jordan,amanda,jessica,james,catherine]);
        console.log("fin")
        // 1. find( ) 함수에 아무런 입력값이 없으면 컬렉션의 전체 document 를 읽어온다.
        var cursor = db.collection('student').find();
        // 2. 읽어온 document 를 cursor 에 넣고 반복처리
        cursor.forEach(function(err,doc){ // document 가 예약어이기 때문에 변수명을 doc로 변경
            if(err){
                console.log(err);
            }else{
                if(doc != null){
                    // 3. document 가 정상적으로 있으면 console 에 출력해준다.
                    console.log(doc);
                }
            }
        });
    }
});