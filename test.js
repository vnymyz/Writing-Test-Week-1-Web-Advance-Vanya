function countDown(fromNumber){
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    // jika kondisi nya false maka recursive akan berhenti
    if (nextNumber > 0){
        countDown(nextNumber);
    }
}
    countDown(3);