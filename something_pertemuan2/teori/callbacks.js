function getUser(callback) {
    console.log("Waiting...");

    setTimeout( () => {
        callback({id: 1, name: "Alice"}); 
    }, 4000);
}

getUser( (user) => {
    console.log(user);
} )
// kalo dalem contoh ini jadinya setTimeout( () => {
    //  console.log({id: 1, name: "Alice"})
    // })