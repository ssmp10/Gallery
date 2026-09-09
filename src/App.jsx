import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        try {
            setLoading(true)
            setError('')

            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${index}&limit=15`
            )

            setUserData(response.data)

        } catch (err) {
            setError('Failed to load images. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [index])


    return (
        <div className="bg-black min-h-screen p-4 text-white">

            {/* Header */}
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold">
                    Image Gallery
                </h1>
            </header>


            {/* Gallery */}
            <div className="flex justify-center flex-wrap gap-5 p-2">

                {loading && (
                    <h3 className="text-gray-300 font-semibold">
                        Loading...
                    </h3>
                )}

                {error && (
                    <div className="text-center">
                        <h3 className="text-red-400 font-semibold">
                            {error}
                        </h3>

                        <button
                            onClick={getData}
                            className="mt-3 bg-amber-400 text-black rounded px-4 py-2 font-semibold"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {!loading && !error && userData.map((elem) => (
                    <Card
                        key={elem.id}
                        elem={elem}
                    />
                ))}

            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center p-6 gap-6">

                <button
                    disabled={index === 1 || loading}
                    className="bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setIndex(index - 1)}
                >
                    Previous
                </button>

                <h4 className="font-semibold">
                    Page {index}
                </h4>

                <button
                    disabled={loading}
                    className="bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setIndex(index + 1)}
                >
                    Next
                </button>

            </div>

        </div>
    )
}

export default App