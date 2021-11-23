function solution(numbers) {
    var li = []
    var sum = 0
    for (var i=0; i<10; i++){
        li[i] = i
    }
    numbers.forEach((x) => {
        
        if (!li.includes(x)) {
            sum += x
            console.log(sum)
            console.log(x)
        }
    })
    console.log(sum)
    return sum;
}
// console.log(solution([1,2,3]))

a = [1,2,3]
b = 0
a.forEach((x) => {
    b += x
})
console.log(b)