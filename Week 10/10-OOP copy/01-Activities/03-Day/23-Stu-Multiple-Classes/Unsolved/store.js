const Toy =require('./toy')
class Store {
  constructor(name, stock, revenue) {
this.name = name;

  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  replenishStock(name, count){

  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
