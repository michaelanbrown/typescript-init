for (let i=0; i<=10; i++) {
    if (i % 2 ==0) {
        console.log(`${i} - even`);
    }
    else {
        console.log(`${i} - odd`)
    }
}

let i: number = 1;
while (i <= 10) {
    if (i % 2 ==0) {
        console.log(`${i} - even`);
    }
    else {
        console.log(`${i} - odd`)
    }
    i++;
}

let fruit: string = 'apple';
switch (fruit) {
    case 'orange':
        console.log('You have selected an orange.');
        break;
    case 'apple':
        console.log('You have selected an apple.');
        break;
    default:
        console.log('You selected a different fruit.');
}