const time = () => ((parseInt(Math.random() * 10) + 1)) * 500
let count = 0;
// time()

// const 아반떼 = async () => {
//     setTimeout(() => {
//         console.log("아반떼 도착");
//         count++;
//     }, time())
//     console.log('아반떼 출발')
// }
// const 소나타 = async () => {
//     setTimeout(() => {
//         console.log("소나타 도착");
//         count++;
//     }, time())
//     console.log('소나타 출발')
// }
// const 제네시스 = async () => {
//     setTimeout(() => {
//         console.log("제네시스 도착");
//         count++;
//     }, time())
//     console.log('제네시스 출발')
// }

const cb = () => {

}

const 참가자 = async () => {
    아반떼();
    소나타();
    제네시스();
}
const 경기시작 = async () => {
    console.log('경기시작')
    await 참가자();
    console.log('경기끝')
}

// 경기시작()

/*
    아반떼 출발
    소나타 출발
    제네시스 출발
    아반떼 도착
    제네시스 도착
    소나타 도착
*/

// promise -> callback 지옥을 벗어나고 싶다!!
// 객체다
// const a = new Promise((resolve, reject) => {
//     for (let i = 0; i < 10; i++) {
//         // console.log(i)
//     }
//     try {

//         resolve("resolved~~~")

//         // if (i == 5) {
//         //     resolve("resolved~~~")
//         // }
//     } catch (e) {
//         reject('rejected~~~')
//     }
// })
const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aaa')
    }, 1000)
    // reject('바로됨')
})

// console.log(a)
// a.then(a => console.log(a)).catch(e => console.log(e))

const 아반떼 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 도착");
            // cb();
        }, time())
        console.log('아반떼 출발')
    })
}


const 소나타 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 도착");
            // cb();
        }, time())
        console.log('소나타 출발')
    })
}
const 제네시스 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 도착");
            // cb();
        }, time())
        console.log('제네시스 출발')
    })
}


// console.log(아반떼(() => { }))
// 아반떼()
//     .then(data => {
//         console.log(data)
//         return 소나타()
//         // return 'a' // then method의 callback 함수는 promise 객체로 리턴함
//     })
//     .then(data => {
//         console.log(data)
//         return 제네시스()
//     })
//     .then(data => {
//         console.log(data)
//         console.log('경기끝')
//     })

const main = async () => {
    console.log('경기시작')
    const result = await 아반떼();
    console.log(result)
    const result2 = await 소나타();
    console.log(result2)
    const result3 = await 제네시스();    
    console.log(result3)
    console.log('경기끝')
    return 'a'
}
main()
.then(data => console.log(data))