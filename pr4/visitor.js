class Visitor {
    visitElementA(element) {
    }

    visitElementB(element) {
    }
}

class Element {
    accept(visitor) {
    }
}

class ElementA extends Element {
    accept(visitor) {
        visitor.visitElementA(this);
    }

    operationA() {
        console.log('Операция с элементом №1');
    }
}

class ElementB extends Element {
    accept(visitor) {
        visitor.visitElementB(this);
    }

    operationB() {
        console.log('Операция с элементом №2');
    }
}

class SomeVisitor extends Visitor {
    visitElementA(element) {
        element.operationA();
    }

    visitElementB(element) {
        element.operationB();
    }
}

// Main
const elementA = new ElementA();
const elementB = new ElementB();
const visitor = new SomeVisitor();

elementA.accept(visitor);
elementB.accept(visitor);
