class Component {
    operation() {
        throw new Error('Ошибка при выполнении операции!');
    }
}

class Notice extends Component {
    operation() {
        console.log('Notice: выполнение операции.');
    }
}

class Alpha extends Component {
    constructor() {
        super();
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    operation() {
        console.log('Alpha: выполнение операции для всех дочерних компонентов.');
        for (let child of this.children) {
            child.operation();
        }
    }
}

// Main
const composite = new Alpha();
composite.add(new Notice());
composite.add(new Notice());
composite.operation();
