import { useState } from 'react'
import { useAuthHeader } from 'react-auth-kit'

const Post = ({ caption, image, id, key, isLiked }) => {

    const authHeader = useAuthHeader()

    const [postIsLiked, setPostIsLiked] = useState(isLiked)

    const onLikePost = async () => {

        setPostIsLiked(val => !val)

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/like/' + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="w-2/3 flex gap-8 flex-col p-8 rounded-lg shadow-lg h-fit">
            <div className="flex flex-row justify-between items-center gap-4 caption-container">
                <div className="flex row items-center">
                    <h3>{caption}</h3>
                </div>
                <div class="like-button">
                    <div class="heart-bg">
                        <div onClick={onLikePost} class={postIsLiked ? "heart-icon liked" : "heart-icon"}></div>
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