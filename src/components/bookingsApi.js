export const myBookingsPromise=(email,accessToken)=>{
    return fetch(`https://hotel-booking-server-three-lake.vercel.app/mybookings?email=${email}`,
        {
            
            headers:{
                authorization:`Bearer ${accessToken}`

        }}
    ).then(res=>res.json())
}