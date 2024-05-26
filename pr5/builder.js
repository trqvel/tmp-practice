class Product {
    constructor() {
        this.partA = "";
        this.partB = "";
        this.partC = "";
    }

    setPartA(partA) {
        this.partA = partA;
    }

    setPartB(partB) {
        this.partB = partB;
    }

    setPartC(partC) {
        this.partC = partC;
    }

    show() {
        console.log(`Части продукта: ${this.partA}, ${this.partB}, ${this.partC}`);
    }
}

class Builder {
    buildPartA() {
        throw new Error('Ошибка в части А!');
    }

    buildPartB() {
        throw new Error('Ошибка в части Б!');
    }

    buildPartC() {
        throw new Error('Ошибка в части В!');
    }

    getProduct() {
        throw new Error('Ошибка при получении!');
    }
}

class SomeBuilder extends Builder {
    constructor() {
        super();
        this.product = new Product();
    }

    buildPartA() {
        this.product.setPartA("Часть A");
    }

    buildPartB() {
        this.product.setPartB("Часть Б");
    }

    buildPartC() {
        this.product.setPartC("Часть В");
    }

    getProduct() {
        return this.product;
    }
}

class Director {
    setBuilder(builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}

// Main
const builder = new SomeBuilder();
const director = new Director();
director.setBuilder(builder);

director.construct();
const product = builder.getProduct();
product.show();
