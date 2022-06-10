import { Navigate, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

 const PrivateRoute = ({children, ...rest}) =>{
    const {user, isLoading} = useAuth();
    return(
            user.email
            ? children
            :<Navigate to="/login" />
    )
};

export default PrivateRoute;