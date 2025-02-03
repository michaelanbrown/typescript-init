//Purpose is to do asynch work then report a success or failure of that work
//Resolve and Reject are functions the Promise object already understands
//Successes use the resolve function
//Failures use the reject function
function doAsynchWork(resolve, reject) {
    if (success) resolve(data);
    else reject(reason);
}
//string is the (vv) type of data that will be returned if the Promise is successful
let p: Promise<string> = new Promise(doAsynchWork);

//or

let p: Promise<string> = new Promise((resolve, reject) => {
    if (success) resolve(data);
    else reject(reason);
})

//Handling Promise Results:
let p: Promise<string> = MethodThatReturnsPromise();
p.then(stringData => console.log(stringData))
.catch(reason => console.log(reason)); //catches exceptions and/or errors