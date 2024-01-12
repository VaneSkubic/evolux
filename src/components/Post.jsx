import { parse } from 'postcss'
import { useAuthUser, useAuthHeader } from 'react-auth-kit'

const Post = ({ name, caption, image, profile, id, onRemovePost, userId }) => {

    const authHeader = useAuthHeader()

    const onLikePost = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/like/' + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()

            console.log(parseRes)

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="w-2/3 flex gap-8 flex-col p-8 rounded-lg shadow-lg h-fit">
            <div className="flex flex-row justify-between items-center">
                <div className="flex row items-center">
                    <h3>{caption}</h3>
                </div>
                <button onClick={onLikePost}>Like</button>
            </div>
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
        </div>
    )
}

export default Post