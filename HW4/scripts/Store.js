import Product from './Product.js';
import Category from './Category.js';
import Cart from './Cart.js';
import Customer from './Customer.js';

class Store {
    #curCtg = -1;
    #curCart = -1;
    #categories = {}
    #products = new Map()
    #carts = []

    constructor() {
        var products = {}
        let katana = new Product(0,'Katana', 'A very very sharp sword used by samurai', 5.00, 'assets/katana.png')
        products[katana.getID()] = katana
        this.#products.set(katana.getID(), katana)

        let gs = new Product(1,'Great Sword', 'A great sword, used by the largest men', 25.00, 'assets/greatsword.png')
        products[gs.getID()] = gs
        this.#products.set(gs.getID(), gs)

        let cat = new Category(0, 'Swords', products)
        this.#categories[cat.getID()] = cat

        products = {}

        let crossbow = new Product(2,'Crossbow', 'A ranged weapon using an elastic launching device consisting of a bow-like assembly called a prod, mounted horizontally on a main frame called a tiller', 3.30, 'assets/crossbow.png')
        products[crossbow.getID()] = crossbow
        this.#products.set(crossbow.getID(), crossbow)

        let longbow = new Product(3,'Longbow', 'A type of tall bow that makes a fairly long draw possible', 25.00, 'assets/longbow.png')
        products[longbow.getID()] = longbow
        this.#products.set(longbow.getID(), longbow)

        let cat2 = new Category(1, 'Bows', products)
        this.#categories[cat2.getID()] = cat2
        let cat3 = new Category(2, 'Axes', {})
        this.#categories[cat3.getID()] = cat3
        this.#curCtg = 0;

        let cart = new Cart(0)
        this.#carts.push(cart);
        this.#curCart = 0;
        let customer = new Customer(0, 'David', 'Whatever', this.#carts)
        this.createStoreFront();
    }
    
    getCurrentCategory() {
        return this.#curCtg;
    }

    setCurrentCategory(id) {
        return this.#curCtg = id;
    }

    getProduct(id) {
        return this.#products.get(id);
    }

    getActiveCart() {
        return this.#carts[this.#curCart];
    }

    createStoreFront() {
        const categories = this.#categories;
        const category = categories[this.getCurrentCategory()];
        const products = category.getProducts();
        document.getElementById("categories-container").innerHTML = ""
        document.getElementById("products-container").innerHTML = ""
        for(const category in categories) {
            document.getElementById("categories-container").innerHTML += categories[category].getHtmlElement();

        }
        for(const product in products) {
            document.getElementById("products-container").innerHTML += products[product].getHtmlElement();
        }
    }
}

const store = new Store();
//creates a pointer to a function
window.setActiveCat = (category_id) => {
    store.setCurrentCategory(category_id);
    store.createStoreFront();
}

window.addToCart = (product_id) => {
    store.getActiveCart().addProduct(store.getProduct(product_id), 1);
    let [body, total] = store.getActiveCart().getHtmlElement();
    document.getElementById("checkout").innerHTML = `<i id='checkout-button' class="bi bi-cart"> </i>Checkout - ${store.getActiveCart().getCount()}`
    document.getElementById("cart-body").innerHTML = body;
    document.getElementById("cost-label").innerHTML = `Total Cost: $${total}`;
    console.log(store.getActiveCart().getHtmlElement());
}