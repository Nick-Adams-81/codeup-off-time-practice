(() => {

// fizz buzz
    for(let i = 1; i < 100; i++) {
        if(i % 15 === 0) {
            console.log('fizz buzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }

        // some es-6 stuff
    const twoSum = (input1, input2, target) => {
        if(input1 + input2 === target) {
            return true;
        } else {
            return false;
        }
    }

    console.log(twoSum(5, 6, 11));

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    arr.forEach((item, index, arr) => {
        console.log(item);
    });

    // some promises practice
    // fetch('https://api.github.com/users')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))

    // with 2 api calls
    // const gitHubPromise = fetch('https://api.github.com/repositories')
    // const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories')
    //
    // Promise.all([gitHubPromise, bitbucketPromise])
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    // parsing the return data to json
    fetch('https://api.github.com/users')
        .then(res => res.json())
        //.then(res => console.log(res))
        .then(users => {
            users.forEach((user) => {
                console.log(user)
            })
        })
})()