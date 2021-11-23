//myEach(callback)

let d = [1, 2, 3, 4]

let e = function(el) {
    return el += "!!!"
}

Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        this[i] = callback(this[i]);
    }
    
    return this;
}

console.log(d.myEach(e))

//myMap(callback)

let f = [1, 2, 3, 4]


Array.prototype.myMap = function (callback) {
        let result = this.slice();
    
        return function() 
        
        //result.myEach(callback)
    }
    
    console.log(f.myMap(e))