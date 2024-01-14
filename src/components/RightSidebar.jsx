import React from 'react'
import { useState, useEffect } from 'react'
import { useSignOut, useAuthHeader } from 'react-auth-kit'

const RightSidebar = ({ getFeed }) => {
    const [userData, setUserData] = useState()

    const signOut = useSignOut()
    const authHeader = useAuthHeader()

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
        <div className='bg-neutral-700 w-1/3 flex py-16 justify-center'>
            <div className='w-2/3 flex flex-col gap-4 justify-start'>
                <button onClick={getFeed} className='bg-blue-500 text-white hover:bg-neutral-100 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Refresh feed
                </button>
                <button onClick={logOut} className='bg-blue-500 text-white hover:bg-neutral-100 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default RightSidebar