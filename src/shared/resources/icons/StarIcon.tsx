export const StarIcon = (props: { color?: string }) => {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.5 0.5L7.95934 4.99139H12.6819L8.86126 7.76722L10.3206 12.2586L6.5 9.48278L2.6794 12.2586L4.13874 7.76722L0.318133 4.99139H5.04066L6.5 0.5Z"
                fill={props.color || "#040404"} />
        </svg>
    );
};