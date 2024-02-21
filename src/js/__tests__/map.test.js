import ErrorRepository from "../map";

test('Проверка извлеченя значения по коду ошибки', () => {
    const map = new ErrorRepository();
    expect(() => {
        map.add(100, 'Нельзя повысить левел умершего');
        map.translate(100);
    }).not.toThrow()
});

test('Проверка выброса ошибки по не известному коду ошибки', () => {
    const map = new ErrorRepository();
    expect(() => {
        map.translate(100);
    }).toThrowError();
});