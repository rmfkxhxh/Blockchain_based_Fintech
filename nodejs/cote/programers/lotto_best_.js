function solution(lottos, win_nums) {
    var posNum = []
    var countZero = 0
    var lottoCorr = 0
    var best = 0
    var worst = 0
    var otherPos = 0
    
    for (var i=0; i<45; i++) {
        posNum[i] = i+1
    }
    posNum.forEach((x) => {
        if (lottos.includes(x)){
            posNum.pop();
        }
    })
    for (var i =0; i < win_nums.length; i++) {
        if (lottos[i] == win_nums[i]) {
            lottoCorr += 1;
        }
        if (lottos[i] == 0){
            countZero += 1
             
        }
    }
    for(var i=0; i < countZero; i++) {
        if (posNum.includes(win_nums[i])){
            lottoCorr += 1
        }
        else {
            otherPos += 1
        }
    }
        best = 7 - lottoCorr
        worst = best - (countZero - otherPos)
    
        
        
    var answer = [];
    return answer;
}