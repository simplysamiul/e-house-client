import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PreLoader from "../custom/PreLoader";

 const PrivateRoute =  ({children}) =>{
         const {user, isLoading} = useAuth();
         const location = useLocation();
    if(isLoading){
        return <PreLoader />
    }

 return (
                user.email ? children
                : <Navigate to="/login" replace state = {{from : location}} />
        )
   
};

export default PrivateRoute;