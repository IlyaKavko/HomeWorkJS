let mass = [5,3,10,7,1,10];

Array.prototype.sum = function() {
    return this.reduce(function(x,y) {return x + y}, 0);
}


console.log(mass.sum())

