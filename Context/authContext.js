import {createContext, useEffect, useState} from 'react'

const AuthContext = createContext({
    //specify some default values 
    isAuthorized: false,
    jwtToken: null,
    onClickLogin: () => {},
})

//Provider 
export const AuthContextProvider = ({children}) => {
    const [isAuthorized, setAuthorized] = useState(false)
    const [jwtToken,setToken] = useState(undefined)

    const onClickLogin = () => {
        setAuthorized(prevState => !prevState)
    } 

    useEffect(() => {
        //initialize the db here...
    },[])

    console.log(isAuthorized,"authorized value")

    return(
        <AuthContext.Provider value={{ 
            isAuthorized,
            jwtToken,
            onClickLogin,
            }}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext