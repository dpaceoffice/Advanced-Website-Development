/**
 * Category Object
 */
 export default class Category {

    #type;//String describing category
    #products;//Array of products owned by category
    #htmlElement;
    #category_id;

    constructor(category_id, type, products) {
        this.#category_id = category_id;
        this.#type = type;
        this.#products = products;
        this.#htmlElement = `<li id="cat_id-${category_id}" class="btn list-group-item" onclick='setActiveCat(${category_id})'>`+this.getType()+`</li>`;
    }

    getType() {
        return this.#type;
    }
    getProducts() {
        return this.#products;
    }
    getHtmlElement() {
        return this.#htmlElement;
    }
    getID() {
        return this.#category_id;
    }
}