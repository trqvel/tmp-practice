class Iterator {
    constructor(container) {
        this._container = container;
        this._index = 0;
    }

    next() {
        this._index += 1;
    }

    value() {
        return this._container[this._index];
    }

    hasMore() {
        return this._index < this._container.length;
    }
}

// Main
const vec = [12, 21, 37, 73, 88];
const it = new Iterator(vec);

while (it.hasMore()) {
    console.log(it.value(), " ");
    it.next();
}
