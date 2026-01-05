import React from 'react'

const logo = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 274 230"
        width="100"
        height="80"
    >
        {/* Main title */}
        <text
            x="137"
            y="60"
            fontFamily="serif"
            fontSize="36"
            fontWeight="bold"
            fill="green"
            textAnchor="middle"
            letterSpacing="8"
        >
            TAXOFF
        </text>

        {/* Wings */}
        <g fill="none" stroke="green" strokeWidth="8">
            <path d="M 20 110 Q 50 95 80 100 Q 100 103 120 115" />
            <path d="M 25 125 Q 55 110 85 115 Q 105 118 125 130" />
            <path d="M 30 140 Q 60 125 90 130 Q 110 133 130 145" />

            <path d="M 154 115 Q 174 103 194 100 Q 224 95 254 110" />
            <path d="M 149 130 Q 169 118 189 115 Q 219 110 249 125" />
            <path d="M 144 145 Q 164 133 184 130 Q 214 125 244 140" />
        </g>

        {/* Partners text AFTER wings */}
        <text
            x="137"
            y="185"
            fontFamily="serif"
            fontSize="36"
            fill="green"
            textAnchor="middle"
            letterSpacing="4"
        >
            Partners
        </text>
    </svg>
);

const Logo = () => {
    return (
        <>
            {logo}
        </>
    )
}

export default Logo