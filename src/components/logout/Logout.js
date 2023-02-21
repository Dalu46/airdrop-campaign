import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const userLogout = ()=>{
        const localstorage = localStorage;
        localstorage.getItem("user-token")
        alert('Are you sure you want to logout')
        localstorage.removeItem("user-token");
        navigate('/login');
    }
    return (
        <button onClick={userLogout} className="register logout-color">
            Logout
        </button>
    )
}

export default Logout;

// https://api.instagram.com/oauth/authorize
//   ?client_id=764625681459412
//   &redirect_uri=https://httpstat.us/200
//   &scope=user_profile,user_media
//   &response_type=code

//   {
//     "access_token": "IGQVJYS2pwMnBFY1dheWQwdUxldHZAaSVJFOVRxX1RrZAmRoYmxFS21aUWpxa1MzcU4yTUJyS0ZAiRUVWYzFRNkptVnlsaTc4c0RVUF9rSDJ0cXhaRXR6eVMzaUZAUS0NZAdUVHbjZA6cC1JeE5xakpQbEdpZATlsbEpIbzhzNjJV",
//     "user_id": 17841455009234939
// }
// long live
// {
//     "access_token": "IGQVJXZAlBWVnN0c2JVTUNlNUZA2ZA3paLVYxMkgtRGZAna2xnb1YyaEFwdXJqQzNjTVVKR0I0YlREWWYyS2lyMkdjVWJKd2QxeFZAOQ3JsUTZADVUpMTFFEd0JiRDNLMnBBWXVHc1o2aWhB",
//     "token_type": "bearer",
//     "expires_in": 5183999
// }