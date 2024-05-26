class Target {
    request() {
    }
}

class specAdapter {
    specificRequest() {
        console.log("Выполняем запрос!");
    }
}

class Adapter extends Target {
    constructor(adapter1) {
        super();
        this.adapter1 = adapter1;
    }

    request() {
        this.adapter1.specificRequest();
    }
}

// Main
const adapter1 = new specAdapter();
const adapter = new Adapter(adapter1);

adapter.request();
