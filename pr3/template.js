class AbstractClass {
    templateMethod() {
        this.step1();
        this.step2();
        this.step3();
    }

    step1() {
        throw new Error('Ошибка 1');
    }

    step2() {
        throw new Error('Ошибка 2');
    }

    step3() {
        throw new Error('Ошибка 3');
    }
}

class TemplateMethodClass extends AbstractClass {
    step1() {
        console.log('Шаг 1 выполнен');
    }

    step2() {
        console.log('Шаг 2 выполнен');
    }

    step3() {
        console.log('Шаг 3 выполнен');
    }
}

// Main
const templateMethod = new TemplateMethodClass();
templateMethod.templateMethod();
