
let a = [1,2,2,3,3,3]

debugger
Array.prototype.uniq = function () {
    let result = [];

    for (let i = 0; i < this.length-1; i++) {
        debugger
        if (!result.includes(a[i])) { result.push(this[i]) };
    }

    return result;
}

console.log(a.uniq())