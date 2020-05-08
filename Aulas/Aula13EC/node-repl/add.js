const prompt = require('prompt');

prompt.start();

prompt.get(['a', 'b'], (err, result) => {
    if (err) {
        console.log(err);

        return 1;
    }

    let a = Number.parseInt(result.a);
    let b = Number.parseInt(result.b);

    console.log(a + b);
});