const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Hey");
        } else {
            reject("ups");
        }
    })
}

anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err))
 .finally(()=> console.log("finally"))