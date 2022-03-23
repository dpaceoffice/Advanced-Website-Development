/**
 * Customer Object
 */
 export default class Customer {

    #customerID;//INT ID of customer
    #name;//Name of customer
    #email;//Email of customer
    #carts;//Array of shopping carts customer has

    constructor(customerID, name, email, carts) {
        this.#customerID = customerID;
        this.#name = name;
        this.#email = email;
        this.#carts = carts;
    }
}