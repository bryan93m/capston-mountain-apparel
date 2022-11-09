import {useState, useEffect} from 'react'
import axios from 'axios';
import UserContext from './UserContext';


function UserState(props) {
    //state//
    const [user, setUser] = useState(false)

    //get user//

    useEffect(() => {
        axios.get('/auth')
        .then(res => {
            updateUser(res.data)
        })
    }, [])
    //functions//

    const logout = () => {
        axios.delete('/logout')
        .then(res => {
            updateUser(false)
        })
    }


    const updateUser = (user) => setUser(user)


  return (
    <UserContext.Provider value={{
        updateUser,
        logout,
        user
    }}>
        {props.children}
    </UserContext.Provider>
    
  )
}

export default UserState