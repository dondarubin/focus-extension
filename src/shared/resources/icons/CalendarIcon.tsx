export const CalendarIcon = (props: { color: string }) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 10.9525V18.5C3 19.9142 3 20.6213 3.43934 21.0607C3.87868 21.5 4.58579 21.5 6 21.5H18C19.4142 21.5 20.1213 21.5 20.5607 21.0607C21 20.6213 21 19.9142 21 18.5V10.9525M3 10.9525V10.0626V9.5C3 8.08579 3 7.37868 3.43934 6.93934C3.87868 6.5 4.58579 6.5 6 6.5H18C19.4142 6.5 20.1213 6.5 20.5607 6.93934C21 7.37868 21 8.08579 21 9.5V10.0626V10.9525M3 10.9525H21"
                stroke={props.color} strokeWidth="2" />
            <path d="M7 3.5L7 6.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" />
            <path d="M17 3.5L17 6.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" />
            <rect x="6.6665" y="13.1665" width="4" height="1.5" rx="0.375" fill={props.color} />
            <rect x="6.6665" y="17.1665" width="4" height="1.5" rx="0.375" fill={props.color} />
            <rect x="13.333" y="13.1665" width="4" height="1.5" rx="0.375" fill={props.color} />
            <rect x="13.333" y="17.1665" width="4" height="1.5" rx="0.375" fill={props.color} />
        </svg>

    );
};