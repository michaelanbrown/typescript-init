function GetDataFromServer() {
    console.log(`Example function`);
}

async function doAsyncStuff {
    let results = await GetDataFromServer();
    console.log(results);
}

console.log('Calling server to retrieve data...');
doAsyncStuff();
console.log('Results will be displayed when ready...');