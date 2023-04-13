import React from "react";

export const TimerIcon = (props: { color: string }) => {
    return (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M30.625 20.4165C30.625 27.6652 24.7487 33.5415 17.5 33.5415C10.2513 33.5415 4.375 27.6652 4.375 20.4165C4.375 13.1678 10.2513 7.2915 17.5 7.2915C24.7487 7.2915 30.625 13.1678 30.625 20.4165ZM17.5 29.6248C22.5856 29.6248 26.7083 25.5021 26.7083 20.4165C26.7083 15.3309 22.5856 11.2082 17.5 11.2082C12.4144 11.2082 8.29167 15.3309 8.29167 20.4165C8.29167 25.5021 12.4144 29.6248 17.5 29.6248ZM17.5 30.6248C23.1379 30.6248 27.7083 26.0544 27.7083 20.4165C27.7083 14.7786 23.1379 10.2082 17.5 10.2082C11.8621 10.2082 7.29167 14.7786 7.29167 20.4165C7.29167 26.0544 11.8621 30.6248 17.5 30.6248ZM18.5 16.0415C18.5 15.4892 18.0523 15.0415 17.5 15.0415C16.9477 15.0415 16.5 15.4892 16.5 16.0415V20.4165C16.5 20.9688 16.9477 21.4165 17.5 21.4165C18.0523 21.4165 18.5 20.9688 18.5 20.4165V16.0415Z"
                  fill={props.color} />
            <path d="M25.5208 10.9375L27.7083 8.75" stroke={props.color} strokeWidth="2" strokeLinecap="round" />
            <path
                d="M14.6827 3.45695C14.8489 3.3019 15.2151 3.1649 15.7245 3.06718C16.2338 2.96947 16.858 2.9165 17.5 2.9165C18.1421 2.9165 18.7662 2.96947 19.2756 3.06718C19.785 3.1649 20.1511 3.3019 20.3173 3.45695"
                stroke={props.color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};