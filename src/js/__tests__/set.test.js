import { Team, Character } from "../set";



test("Проверка создания объекта на основе класса Character", () => {
    expect(() => {
        const man = new Character('Max');
    }).not.toThrow();
});

test('Проверка добавления игрока в команду - метод add()', () => {
    expect(() => {
        const man = new Team();
        man.add('Max');
    }).not.toThrow();
});

test('Проверка выброса ошибки при попытки дублирования игрока - метод add()', () => {
    expect(() => {
        const man = new Team();
        man.add('Max');
        man.add('Max');
    }).toThrow();
});

test('Проверка добавления произвольного корличетсмва игроков в команду - метод addAll()', () => {
    const expected = ["Max", "Max1", "Max2", "Max3"]
    expect(() => {
        const man = new Team();
        man.addAll('Max', 'Max1', 'Max2', 'Max3');
    }).not.toThrow();
});


test('Проверка преобразования Set в массив - метод toArray', () => {
    const man = new Team();
    expect(() => {
        man.toArray();
    }).not.toThrow();
});