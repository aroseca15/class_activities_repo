function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  
  this.setBalance = (value)=> {
    this.balance = value;
  }

  this.updateStatement = (value)=>{
    this.statement.push(value)
  }

  this.getStatement = ()=>{
    return this.statement.slice(0);
  }

  this.printStatement = () =>{
    let statement = this.getStatement();
    for (let i= 0; i < statement.length; i++) {
      console.log(`${i+1}. ${statement[i]}`)
      
    }
  }

  this.deposit = (value) =>{
    let newBalance = this.getBalance() + value;
    this.updateStatement(newBalance);
    this.setBalance(newBalance);
  }

  this.withdraw = (value) =>{
    let newBalance = this.getBalance() - value;
    this.updateStatement(newBalance);
    this.setBalance(newBalance);
  }

};

const bank = new MiniBank(0);
console.log(bank);