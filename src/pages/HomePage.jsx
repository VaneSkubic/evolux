import { useSignOut, useAuthHeader } from 'react-auth-kit'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
import LeftSidebar from '../components/LeftSidebar'

const HomePage = () => {

    return (
        <div className='w-full h-full flex flex-row'>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default HomePage