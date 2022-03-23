/**
 * Cart object
 */
export default class Cart {

    #products;//map of product and their quantities
    #totalQuantity;//Keep track of total amount of products so we dont have to scan for it
    #cartID = -1;//INT cart instance ID


    constructor(cartID, products = new Map()) {
        this.#cartID = cartID;
        this.#products = products;
        this.#totalQuantity = 0;
    }

    /**
     * 
     * @returns map of products and their quantities
     */
    getProducts() {
        return this.#products;
    }

    /**
     * Adds product to map
     * @param {Product} product 
     * @param {int} quantity 
     */
    addProduct(product, quantity) {
        let f = quantity;
        if (this.getProducts().has(product)) {
            var prevQ = this.#products.get(product);
            this.#products.set(product, prevQ + quantity);
        } else {
            this.#products.set(product, quantity);
        }
        this.#totalQuantity += quantity;
    }
    /**
     * Removes product or modifies its quantity in dictionary
     * @param {Product} product 
     * @param {int} quantity 
     */
    removeProduct(product, quantity) {
        if(this.getProducts().has(product)) {
            var curQ = this.#products.get(product);
            if(curQ <= quantity) {
                this.#totalQuantity -= curQ;
                this.#products.delete(product);
            } else
                this.#totalQuantity -= quantity;
                this.#products.set(product, curQ - quantity);
        }
    }

    getTotalCost() {
        let total = 0;
        for(const [product, quantity] of this.#products) {
            //console.log(product);
            //console.log(quantitiy);
            total += product.getPrice() * quantity
        }
        return total;
    }

    getCount() {
        return this.#totalQuantity;
    }

    getHtmlElement() {
        let body = ``
        let total = 0;
        for(const [product, quantity] of this.#products) {
            body += `<p>${product.getTitle()} - $${product.getPrice()} x ${quantity} <a class="btn-sm btn-danger">remove</a></p>`
            total += product.getPrice() * quantity
        }
        return [body,total]
    }
}