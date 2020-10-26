// testing map()
test("testing ", t => {
    let result = deleteItem(2);
    t.equal(result.length, 3);
     result = deleteItem(9);
    t.equal(result.length, undefined);
});

test("testing ", t => {
    const result = deleteItem(2);
    t.equal(result.length, 2);
});

test("testing ", t => {
    const result = deleteItem(2);
    t.checkDelete(result, 1);
    t.checkDelete(result, 2);
});