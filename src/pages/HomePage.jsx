import { useSignOut, useAuthHeader } from 'react-auth-kit'

const HomePage = () => {

    const authHeader = useAuthHeader()
    const signOut = useSignOut()

    const logOut = async () => {

        try {
            await fetch(process.env.REACT_APP_BASE_URL + '/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

        } catch (err) {

        }

        signOut()
    }

    return (
        <div className='w-full h-full flex flex-row'>
            Home page
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default HomePage