function solution(s) {
    num_dic = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    for (var key in num_dic) {
        if (!num_dic.hasOwnProperty(key)) {
            continue;
        }
        answer = s.replace(new RegExp(key, "g"), num_dic[key]);
    }
    return answer;
}


var new_str = "one4seveneight";
num_dic = {
    0: 'zero',
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}



// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123