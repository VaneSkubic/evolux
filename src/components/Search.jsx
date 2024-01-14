import { useState } from 'react'
import { useAuthHeader } from 'react-auth-kit'

const Search = ({ setData, setIsLoading }) => {

    const [query, setQuery] = useState('*')

    const authHeader = useAuthHeader()

    const searchHabits = async () => {

        if (query) {

            setIsLoading(true)

            var url = process.env.REACT_APP_BASE_URL + '/search?data=' + query

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${authHeader()}`
                    },
                })

                const parseRes = await response.json()
                setIsLoading(false)

                if (Array.isArray(parseRes.data)) {

                    setData(parseRes.data)

                } else {

                    setData([{ posts: [parseRes.data] }])

                }

            } catch (err) {

                console.log(err)

            }
        } else {
            setData([])
        }


    }

    return (
        <div>
            <div className="flex justify-center mb-4">
                <div className="input-group relative flex flex-wrap items-stretch w-full">
                    <input onChange={(e) => setQuery(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                </div>
            </div>
            <button onClick={searchHabits} className='bg-blue-500 w-full text-white hover:bg-neutral-100 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Search</button>
        </div>
    )
}

export default Search