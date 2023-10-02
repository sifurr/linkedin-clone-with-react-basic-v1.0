/* eslint-disable react/prop-types */
import { AuthContext } from "../context/AuthContext";


const AuthProvider = ({children}) => {
    const test = "TRON"
    const authentication = {test}
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;