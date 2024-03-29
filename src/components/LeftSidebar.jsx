import Search from "./Search"

const LeftSidebar = ({ setData, setIsLoading }) => {

    return (
        <div className='bg-neutral-700 w-1/3 flex pt-16 justify-center overflow-y-auto'>
            <div className='w-2/3 flex flex-col gap-8'>
                <h1 className='text-center text-3xl text-white'>Evolux</h1>
                <div className="flex flex-col self-start items-start text-left gap-2">
                    <Search setIsLoading={setIsLoading} setData={setData} />
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar