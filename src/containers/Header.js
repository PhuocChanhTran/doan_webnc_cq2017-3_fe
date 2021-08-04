import React from 'react'
import {useHistory} from 'react-router-dom';
function Header(){
    const history = useHistory();
    const signOutBtn_Clicked = () => {
        delete  localStorage.userEmail;
        delete localStorage.accessToken;
        delete localStorage.refreshToken;
        delete localStorage.userRole;
        history.push('/');
    }
    return (
        <div className="header">
            <div>header</div>
            <div>{localStorage.userEmail?<span>username: {localStorage.userEmail}, role: {localStorage.userRole}<button onClick={()=>signOutBtn_Clicked()}>Signout</button></span>:<span></span>}</div>
            
        </div>
    );
}
export default Header;