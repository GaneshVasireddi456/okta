import React,{useEffect} from 'react'
import { useOktaAuth } from '@okta/okta-react';


export const Home = () => {
    const { oktaAuth } = useOktaAuth();
    async function getUserDetails() {       
        var userID = await oktaAuth.getUser();
        console.log("user",userID);
        var token= oktaAuth.getAccessToken();
        console.log("token",token);
    }
    useEffect(() => {
        getUserDetails()
    })
    //  const { oktaAuth } = useOktaAuth();
    //  console.log("user",await oktaAuth.getUser());
    return (
        <div>
            <p>Home Compenent</p>
        </div>
    )
}
export default Home;
