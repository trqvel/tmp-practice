class IStrategy {
    execute() {
        throw new Error('Unknown error!');
    }
}

class Strategy1 extends IStrategy {
    execute() {
        console.log('Следуем стратегии №1');
    }
}

class Strategy2 extends IStrategy {
    execute() {
        console.log('Следуем стратегии №2');
    }
}

class Context {
    constructor(strategy) {
        this._strategy = strategy;
    }

    setStrategy(newStrategy) {
        this._strategy = newStrategy;
    }

    executeStrategy() {
        this._strategy.execute();
    }
}

// Main
const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

const context = new Context(strategy1);
context.executeStrategy();

context.setStrategy(strategy2);
context.executeStrategy();
