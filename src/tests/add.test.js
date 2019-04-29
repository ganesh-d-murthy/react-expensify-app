const add = (a, b) => a + b;

test('should add 2 numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate greeting Hello {name}!', () => {
    const result = generateGreeting('Ganesh');
    expect(result).toBe('Hello Ganesh!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});
