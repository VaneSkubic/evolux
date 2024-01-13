// import Post from './Post'
import { useAuthHeader } from 'react-auth-kit'
import { useEffect, useState } from 'react'
import Post from './Post'

const Feed = () => {

    const [data, setData] = useState([])

    const authHeader = useAuthHeader()

    const getFeed = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/feed', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

            const parseRes = await response.json()
            setData(parseRes.data)

            console.log(parseRes)

        } catch (err) {

            console.log(err)

        }

    }

    useEffect(() => {
        getFeed()
    }, [])


    return (
        <div className='py-8 bg-neutral-600 gap-4 w-full h-full overflow-y-scroll flex flex-col items-center '>
            {data.map((keyword) => {
                return <Post
                    key={keyword.posts[0].id}
                    id={keyword.posts[0].id}
                    caption={keyword.posts[0].caption}
                    image={keyword.posts[0].media?.media_url}
                    isLiked={keyword.posts[0].is_liked}
                />
            })
            }
        </div>
    )
}

export default Feed