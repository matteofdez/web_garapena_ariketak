function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function displayFibonacci() {
    const n = parseInt(document.getElementById('number').value);
    let sequence = [];

    for (let i = 0; i <= n; i++) {
        sequence.push(fibonacci(i));
    }

    document.getElementById('fibonacci-sequence').innerText = sequence.join(', ');
}
