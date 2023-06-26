export const setAuthToken = user =>{
    const currentUser = {
        email: user.email
    }
    console.log(currentUser)

    //get jwt token
    fetch('https://time-to-travel-server-ehasanulh1.vercel.app/jwt', {
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