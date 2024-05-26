class Subject {
    request() {
        throw new Error('Ошибка субъекта!');
    }
}

class Handler extends Subject {
    request() {
        console.log('Handler: Обрабатываем запрос...');
    }
}

class Proxy extends Subject {
    constructor() {
        super();
        this._handler = null;
    }

    request() {
        if (this._handler === null) {
            this._handler = new Handler();
        }
        console.log('Proxy: Действия перед выполнением запроса');
        this._handler.request();
        console.log('Proxy: Доп. действия после выполнения запроса');
    }
}

// Main
const proxy = new Proxy();
proxy.request();

