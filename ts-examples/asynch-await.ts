function GetDataFromServer() {
    console.log(`Example function`);
}

async function doAsynchStuff {
    let results = await GetDataFromServer();
    console.log(results);
}

console.log('Calling server to retrieve data...');
doAsynchStuff();
console.log('Results will be displayed when ready...');