import personage from '../app';

// eslint-disable-next-line no-undef
test('сортировка персонажа', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
        // eslint-disable-next-line object-curly-newline
        { key: 'name', value: 'мечник' },
        // eslint-disable-next-line object-curly-newline
        { key: 'level', value: 2 },
        // eslint-disable-next-line object-curly-newline
        { key: 'attack', value: 80 },
        // eslint-disable-next-line object-curly-newline
        { key: 'defence', value: 40 },
        // eslint-disable-next-line object-curly-newline
        { key: 'health', value: 10 },
    ];
    // eslint-disable-next-line no-undef, array-bracket-spacing, array-bracket-newline
    expect(personage(obj, ['name', 'level'])).toEqual(result);
});

// eslint-disable-next-line no-undef
test('сортировка персонажа', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
        // eslint-disable-next-line object-curly-newline
        { key: 'level', value: 2 },
        // eslint-disable-next-line object-curly-newline
        { key: 'defence', value: 40 },
        // eslint-disable-next-line object-curly-newline
        { key: 'name', value: 'мечник' },
        // eslint-disable-next-line object-curly-newline
        { key: 'attack', value: 80 },
        // eslint-disable-next-line object-curly-newline
        { key: 'health', value: 10 },
    ];
    // eslint-disable-next-line no-undef, array-bracket-spacing, array-bracket-newline
    expect(personage(obj, ['level', 'defence', 'name'])).toEqual(result);
});

// eslint-disable-next-line no-undef
test('Сортировка без персонажа', () =>{
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
        // eslint-disable-next-line object-curly-newline
        { key: 'attack', value: 80 },
        // eslint-disable-next-line object-curly-newline
        { key: 'defence', value: 40 },
        // eslint-disable-next-line object-curly-newline
        { key: 'health', value: 10 },
        // eslint-disable-next-line object-curly-newline
        { key: 'level', value: 2 },
        // eslint-disable-next-line object-curly-newline
        { key: 'name', value: 'мечник' },
    ];
    // eslint-disable-next-line no-undef
    expect(personage(obj)).toEqual(result);
});