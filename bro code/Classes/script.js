// class = (Es6 feature) provides a more stuctured and cleaner way to work with objects compared to traditional constructors functions export. static keyword , encapsulation , inheritence


class Product{
    constructor( name , price){
        this.name = name;
        this.price = price ;

    }
    displayProduct(){
        console.log(`product : ${this.name}`);
        console.log(`price : $${this.price.toFixed(2)}`);

    }
    calculatetotal(salesTax){
        return this.price + (this.price * salesTax);

    }
}

const salesTax = 0.05;


const product1 = new Product("shirt" , 19.99);
const product2 = new Product("Pants" , 22.50);
const product3 = new Product("Underwear" , 100.00);


product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
const total = product1.calculatetotal(salesTax);
console.log(`Total price (with tax) : $${total.toFixed(2)}`);
