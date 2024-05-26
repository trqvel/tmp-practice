class Mediator {
    sendMessage(message, colleague) {
    }
}

class Colleague {
    constructor(mediator = null) {
        this.mediator = mediator;
    }

    receiveMessage(message) {
    }

    sendMessage(message) {
        if (this.mediator) {
            this.mediator.sendMessage(message, this);
        }
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }
}

class SomeColleague extends Colleague {
    constructor(name, mediator = null) {
        super(mediator);
        this.name = name;
    }

    receiveMessage(message) {
        console.log(`${this.name} получил: ${message}`);
    }
}

class SomeMediator extends Mediator {
    constructor() {
        super();
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }

    sendMessage(message, colleague) {
        for (let col of this.colleagues) {
            if (col !== colleague) {
                col.receiveMessage(message);
            }
        }
    }
}

// Main
const mediator = new SomeMediator();
const colleague1 = new SomeColleague('User1', mediator);
const colleague2 = new SomeColleague('User2', mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);

colleague1.sendMessage('Hi User1!');
colleague2.sendMessage('Hello User2!');
