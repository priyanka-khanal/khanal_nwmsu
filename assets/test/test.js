QUnit.test('Testing Firstname with several sets of inputs', function (assert) {
    assert.equal(vfirst("abscde"), 6, 'Tested with characters on first name');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { vfirst(""); }, /The given argument is not a valid First name/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { vfirst("348"); }, /The given argument is not a valid first name/, 'Passing in a string with numbers raises an Error');
    assert.throws(function () { vfirst("%^*}, /The given argument is not a valid first name/, 'Passing in a string with special characters raises an Error');
});
