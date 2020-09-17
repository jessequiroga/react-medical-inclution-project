import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import IconButton from '@material-ui/core/IconButton';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avata:{
        margin: theme.spacing(1),
        verticalAlign:"sub",
        marginTop: 5
    }
}));

const AuthOptions = () => {
    const classes = useStyles();
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
                    <IconButton onClick={logout} color="inherit" className="button-border"><LockOutlinedIcon /><span style={{fontSize:18}}>Sign out</span></IconButton>
                ) : (
                        <div className={classes.avata} >
                            <IconButton onClick={register} color="inherit" className="button-border"><PersonAddIcon /><span style={{fontSize:18}}>Register</span></IconButton>
                            <IconButton onClick={Login1} color="inherit" className="button-border"><LockOutlinedIcon /><span style={{fontSize:18}}>Sign in</span></IconButton>
                        </div>
                    )}
        </div>
    )
}
export default AuthOptions ;
