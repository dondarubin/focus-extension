import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useOverlay(open: boolean, overlayRef: MutableRefObject<any>) {
    const [isOpen, setIsOpen] = useState(open);
    const documentRef = useRef(document);

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(overlayRef.current && !overlayRef.current.contains(event.target));
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        documentRef.current.addEventListener("click", handleClickOutside);

        return () => {
            documentRef.current.removeEventListener("click", handleClickOutside);
        };
    }, [overlayRef, documentRef]);

    return {
        isOpen,
        setIsOpen
    };
}