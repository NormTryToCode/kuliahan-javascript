async function waitForSomething(){
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000)
    });

    const result = await promise;
    alert(result);
}

waitForSomething()