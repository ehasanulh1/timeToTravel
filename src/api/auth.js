export const setAuthToken = user =>{
    const currentUser = {
        email: user.email
    }
    console.log(currentUser)

    //get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data=>{
        localStorage.setItem('timeToTravel', data.token)
    })
}