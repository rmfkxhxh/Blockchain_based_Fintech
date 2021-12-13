function solution(new_id) {

    new_id = new_id.toLowerCase();
    var reg_special = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g
    var reg_dots = /[\.]+[\.]+/g
    new_id = new_id.replace(reg_special, '')
    new_id = new_id.replace(reg_dots, '.')


    if (new_id[new_id.length - 1] == '.') {
        new_id = new_id.split('');
        new_id[new_id.length - 1] = '';
        new_id = new_id.join('')
    }
    if (new_id[0] == '.') {
        new_id = new_id.split('')
        new_id[0] = '';
        new_id = new_id.join('')

    }
    
    new_id = new_id.slice(0, 16)
    
    if (new_id[new_id.length - 1] == '.') {
        new_id = new_id.split('');
        new_id[new_id.length - 1] = ''
        new_id = new_id.join('')
        }
   
    if (new_id == '') {
        new_id = 'a'
    }

    if (new_id.length < 3) {
        for (var i = 0; i < 2; i++)
            while (new_id.length < 3){
            new_id = new_id + new_id[new_id.length-1-i]
        }
    }
    console.log(new_id)
    return new_id;
}


var a = "abcdefghijklmn.p"

solution(a)
// var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g
// // console.log(reg)
// var regex = /[\.]+[\.]+/g
// // var regex = /(\..*){2,}/;
// var str = '.....asdasdsaa...sd...asdaasdasd...sa..'
// regex.test("hello.world."); // true
// regex.test("hello.world"); // false
// regex.test("."); // false
// console.log(str.replace(regex, '.')); // true

//다른사람 풀이:
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);  // len이 2보다 크면 answer; 2보다 작으면 
// }