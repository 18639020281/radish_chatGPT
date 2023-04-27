const password = process.env.PASSWORD;

if (password !== 'radish') {
    throw new Error('Incorrect password');
}
