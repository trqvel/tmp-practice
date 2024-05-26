class Processor {
    process(callback) {
        console.log("Выполняется обработка...");
        callback();
        console.log("Обработка завершена.");
    }
}

function myCallback() {
    console.log("Вызвана функция обратного вызова!");
}

// Main
const processor = new Processor();
processor.process(myCallback);
