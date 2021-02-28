for (let i = 0; i <= 11; i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (i == 11) {
        break;
    }

    console.log(i);
}