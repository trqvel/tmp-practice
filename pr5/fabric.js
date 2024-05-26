class AbstractProductA {
    methodA() {
        throw new Error('Ошибка в методе А!');
    }
}

class ProductA1 extends AbstractProductA {
    methodA() {
        console.log('Продукт 1 метод A');
    }
}

class ProductA2 extends AbstractProductA {
    methodA() {
        console.log('Продукт 2 метод A');
    }
}

class AbstractProductB {
    methodB() {
        throw new Error('Ошибка в методе Б!');
    }
}

class ProductB3 extends AbstractProductB {
    methodB() {
        console.log('Продукт 3 метод Б');
    }
}

class ProductB4 extends AbstractProductB {
    methodB() {
        console.log('Продукт 4 метод Б');
    }
}

class AbstractFactory {
    createProductA() {
        throw new Error('Ошибка создания продукта в А!');
    }

    createProductB() {
        throw new Error('Ошибка создания продукта в Б!');
    }
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB3();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB4();
    }
}

// Main
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB3 = factory1.createProductB();

productA1.methodA();
productB3.methodB();

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB4 = factory2.createProductB();

productA2.methodA();
productB4.methodB();
