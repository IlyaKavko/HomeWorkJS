let mass = [5, '3', 'hi', 7, 1, 10];


Array.prototype.sum = function () {
    let result = 0;
    this.forEach((item) => {
        if (!isNaN(item)) {
            result += Number(item);
        } 
    });
    return result;
};

console.log(mass.sum());