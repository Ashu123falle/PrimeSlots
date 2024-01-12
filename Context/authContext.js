import {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext({
    //specify some default values 
    isAuthorized: false,
    jwtToken: null,
    onClickLogin: () => {},
    favouriteMediaData: [],
    addFavMediadata: () => {}, 
})

//Provider 
export const AuthContextProvider = ({children}) => {
    const [isAuthorized, setAuthorized] = useState(true)
    const [jwtToken,setToken] = useState(undefined)
    const [favouriteMediaData, setFavMediadata] = useState([])

    const onClickLogin = () => {
        setAuthorized(prevState => !prevState)
    } 

    //add media to favourites
    const addFavMediadata = (data) => {
        if (data.isLiked === true) {
            setFavMediadata((prevData) => [...prevData, data])
        } else {
            const filteredData = favouriteMediaData.filter(obj => obj.id !== data.id)
            setFavMediadata(filteredData) 
        }
    } 

    useEffect(() => {
        //initialize the db here...
    },[])

    return(
        <AuthContext.Provider value={{ 
            isAuthorized,
            jwtToken,
            onClickLogin,
            favouriteMediaData,
            addFavMediadata: addFavMediadata,
            setFavMediadata,
            }}>
            {children}
        </AuthContext.Provider>
    )
} 

