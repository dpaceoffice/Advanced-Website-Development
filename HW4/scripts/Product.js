/**
 * Product Object
 */
export default class Product {

    #productID//INT value to refer to product
    #title//String title of product
    #des//String description of product
    #price//double price of product
    #image//string path to image of product
    #htmlElement

    constructor(productID, title, des, price, image) {
        this.#productID = productID;
        this.#title = title;
        this.#des = des;
        this.#price = price;
        this.#image = image;
        this.#htmlElement =
        `<div class="col"><div class="card mb-1" style="width: 18rem;">
        <img class="card-img-top" src="`+ this.getImage() + `" alt="` + this.getTitle() + `">
            <div class="card-body">
                <h5 class="card-title">` + this.getTitle() + `</h5>
                <p class="card-text">` + this.getDescription() + `</p>
                <p class="card-text">$` + this.getPrice() + `</p>
                <a class="btn btn-primary" onclick="addToCart(${productID})">Add to Cart</a>
            </div>
    </div></div>`;
    }

    getID() {
        return this.#productID;
    }
    getImage() {
        return this.#image;
    }
    getTitle() {
        return this.#title;
    }
    getDescription() {
        return this.#des;
    }
    getPrice() {
        return this.#price;
    }
    getHtmlElement() {
        return this.#htmlElement;
    }

}
