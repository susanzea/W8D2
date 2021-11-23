
let a = [1,2,2,3,3,3]

Array.prototype.uniq = function () {
    let result = [];

    for (let i = 0; i <= this.length-1; i++) {
        if (!result.includes(a[i])) { result.push(this[i]) };
    }

    return result;
}

console.log(a.uniq())

let b = [-2, -1, 0, 2]

Array.prototype.twoSum = function () {
    let result = [];
    
    for (let i = 0; i <= this.length-1; i++) {
        for (let j = i + 1; j <= this.length-1; j++) {
            if ((this[i] + this[j]) === 0) {
                let netZeroPair = [this[i], this[j]]
                result.push(netZeroPair);
            }
        }
    }
    return result;
}

console.log(b.twoSum())



let c = [[1,4,6],
    [8,3,5]]
                             
// let cTransposed = [[1, 8], [4, 3], [6, 5]]

Array.prototype.transpose = function() {
    let transpArr = []
    const transpArrRowsNum = this[0].length - 1
    const transpArrColsNum = this.length - 1

    for (let transpRow = 0; transpRow <= transpArrRowsNum; transpRow++) { //0,1,2
        newRow = []
        for (let transpCol = 0; transpCol < transpArrColsNum; transpCol++) { //0,1
            debugger
            row.push(this[transpCol][transpRow])
            row.push(this[transpCol+1][transpRow])
       }
        transpArr.push(newRow)
    }

    return transpArr;
}

console.log(c.transpose())


// PHASE TWO



