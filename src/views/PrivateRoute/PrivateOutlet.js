import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PreLoader from "../custom/PreLoader";

 const PrivateOutlet =  () =>{
         const {user, isLoading} = useAuth();
         const location = useLocation();
    if(isLoading){
        return <PreLoader />
    }

 return (
                user.email ? <Outlet />
                : <Navigate to="/login" replace state = {{from : location}} />
        )
   
};

export default PrivateOutlet;