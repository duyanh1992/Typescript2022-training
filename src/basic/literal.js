function add(a, b, type) {
    if (typeof a === 'number' && typeof b === 'number' && type === 'as-number')
        return a + b;
    return a.toString() + b.toString();
}
console.log(add(55, 99, 'as-number'));
console.log(add('55', '99', 'as-text'));
