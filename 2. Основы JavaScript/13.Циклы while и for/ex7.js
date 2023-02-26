let endOfSequence = prompt("До какого числа последовательность?");

cancel: for (let i = 2; i <= endOfSequence; i++) {

    for (let j = 2; j * j <= i; j++) {
        if (i % j == 0) {
            continue cancel;
        }
    }
    alert(i);
}
