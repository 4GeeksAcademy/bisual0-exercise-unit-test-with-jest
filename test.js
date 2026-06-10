const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(1);
    expect(dollars).toBeCloseTo(1.07, 2);
});

test("21 dollars should be 3071.50 yen", function () {
    const yen = fromDollarToYen(21);
    expect(yen).toBeCloseTo(3071.4953, 2);
});

test("156.5 yen should be 0.87 pounds", function () {
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBeCloseTo(0.87, 2);
});
