 class Customer{ 
    constructor(id,customerNumber){
        this.id=id //prototyping
        this.customerNumber=customerNumber//prototyping
    }
}

let customer = new Customer(1,"12345");
//prototype deniyor bu yapıya
customer.name="ashhee" //prototyping -->instance a yapılan prototyping
console.log(customer.name)
Customer.deneme="deneme"
console.log(Customer.deneme) // prototyping ---> clasa yapılan prototyping 

console.log(customer)

// -------------------------------------
class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}