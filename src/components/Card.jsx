import React from 'react'

const Card = ({ elem }) => {
    return (
        <div>
            <a
                href={elem.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="h-40 w-44 overflow-hidden bg-white rounded-lg">
                    <img
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        src={elem.download_url}
                        alt={`Photo by ${elem.author}`}
                    />
                </div>

                <h2 className="font-bold text-lg mt-1">
                    {elem.author}
                </h2>
            </a>
        </div>
    )
}

export default Card