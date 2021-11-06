import { useCallback, useContext } from "react"
import Context from "context/UserContext"
import { loginService } from "services/login"


export const useUser = () => {
    const {token, setToken} = useContext(Context)
   
    const login = useCallback(({username, password}) => {
        loginService({username, password})
        .then(({token}) => setToken(token))
        .catch(err => console.log(err))
    }, [setToken])

    const logout = useCallback(() => {
        setToken(null)
    }, [setToken])

    return {
        isLogged: Boolean(token),
        login,
        logout
    }
}
