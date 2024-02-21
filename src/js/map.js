export default class ErrorRepository {
    constructor(error) {
        this.library = new Map();
    }

    add(code, message) {
        this.library.set(code, message);
        return this.library;
    }

    translate(code) {
        if (!this.library.has(code)) {
            throw new Error(`Код ${code} не найден`);
        } else {
            return this.library.get(code);
        }
    }
}

// const error = new ErrorRepository();
// error.add(100, 'Нельзя повысить левел умершего');
// error.add(200, 'Игрок уже выше уровнем чем ожидалось');
// error.add(300, 'Нельзя повысить левел умершего');
// console.log(error.translate(100));
// console.log(error.translate(200));
// console.log(error.translate(300));
// console.log(error.translate(400));
