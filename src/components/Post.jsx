import { useState } from 'react'
import { useAuthHeader } from 'react-auth-kit'

const Post = ({ caption, image, id, isLiked }) => {

    const authHeader = useAuthHeader()

    const [postIsLiked, setPostIsLiked] = useState(isLiked)

    const onLikePost = async () => {

        console.log('oonLikePost')

        setPostIsLiked(val => !val)

        try {
            await fetch(process.env.REACT_APP_BASE_URL + '/like/' + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="w-2/3 bg-neutral-800 flex gap-8 flex-col p-8 rounded-lg shadow-xl h-fit">
            <div className="flex flex-row justify-between items-center gap-4 caption-container">
                <div className="flex row items-center text-white">
                    <h3>{caption}</h3>
                </div>
                <div className="like-button">
                    <div className="heart-bg">
                        <div onClick={!postIsLiked ? onLikePost : undefined} className={postIsLiked ? "heart-icon liked" : "heart-icon"}></div>
                    </div>
                </div>
            </div>
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
        </div>
    )
}

export default Post