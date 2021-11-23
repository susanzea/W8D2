
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

