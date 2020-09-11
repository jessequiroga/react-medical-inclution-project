import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import IconButton from '@material-ui/core/IconButton';
import { unsupportedProp } from '@material-ui/core';

const AuthOptions = () => {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const Login1 = () => history.push("/login1")
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "")
    }
    return (
        <div>
            {
                userData.user ? (
                    <IconButton onClick={logout} color="inherit" className="button-border"><span style={{fontSize:18}}>Sign out</span></IconButton>
                ) : (
                        <>
                            <IconButton onClick={register} color="inherit" className="button-border" 
                            
                            
                            ><span style={{fontSize:18}}>Register</span></IconButton>
                            <IconButton onClick={Login1} color="inherit" className="button-border"><span style={{fontSize:18}}>Sign in</span></IconButton>
                        </>
                    )}
        </div>
    )
}
export default AuthOptions ;
