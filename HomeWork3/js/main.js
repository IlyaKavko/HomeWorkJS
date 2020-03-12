let calculater = {
    sum() {
      return this.a + this.b;
    },
    min() {
      return this.a - this.b;
    },
    getNamber() {
      this.a = +prompt("Введите число a");
      this.b = +prompt("Введите число b");
    }
  };
  
  calculater.getNamber();
  console.log(calculater.sum());
  console.log(calculater.min());
  