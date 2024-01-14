import { useSignOut, useAuthHeader } from 'react-auth-kit'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
import LeftSidebar from '../components/LeftSidebar'
import { useEffect, useState } from 'react'

const HomePage = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const authHeader = useAuthHeader()

    const getFeed = async () => {

        try {

            setIsLoading(true)

            const response = await fetch(process.env.REACT_APP_BASE_URL + '/feed', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

            const parseRes = await response.json()

            setIsLoading(false)

            setData(parseRes.data)

        } catch (err) {

            console.log(err)

        }

    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <div className='w-full h-full flex flex-row'>
            <LeftSidebar setIsLoading={setIsLoading} setData={setData} />
            <Feed isLoading={isLoading} data={data} />
            <RightSidebar getFeed={getFeed} />
        </div>
    )
}

export default HomePage