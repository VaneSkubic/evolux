import { Link, Navigate, useNavigate } from "react-router-dom"
import Search from "./Search"

const LeftSidebar = () => {

    return (
        <div className='bg-neutral-100 border-r-2 w-1/3 flex pt-16 justify-center overflow-y-auto'>
            <div className='w-2/3 flex flex-col gap-8'>
                <h1 className='text-center text-3xl'>Evolux</h1>
                <div className="flex flex-col self-start items-start text-left gap-2">
                    {/* <button>
                        Feed
                    </button> */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar