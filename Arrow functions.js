const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => num ** 2);
    const evens = squares.filter((sqaure) => square % 2 === 0);
    return evens;
}