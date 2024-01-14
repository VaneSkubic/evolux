// import Post from './Post'
import { useAuthHeader } from 'react-auth-kit'
import { useEffect, useState } from 'react'
import Post from './Post'

const Feed = ({ data, isLoading }) => {

    console.log(data)

    return (
        <div className='py-8 bg-neutral-600 gap-4 w-full h-full overflow-y-scroll flex flex-col items-center '>
            {
                isLoading ? <div className='text-white'>Loading...</div> :
                    data && data.map((keyword) => {
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