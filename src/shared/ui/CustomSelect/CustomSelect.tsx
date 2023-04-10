import React, { FC, ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styles from "./CustomSelect.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { getInnerText } from "~shared/lib/helpers/getInnerText";

interface CustomSelectProps {
    children: ReactElement[];
    className?: string;
    initValue?: string;
    OnChange?: (selected: string) => void;
}

type Option = {
    text: string;
    element: ReactElement;
}

function createOption(option: ReactElement): Option {
    return {
        text: getInnerText(option),
        element: option
    };
}

function initOption(optionText: string, options: Option[]): Option {
    const opt = options.find(opt => opt.text.toLowerCase() === optionText);
    if (opt === undefined) {
        console.error("can not find initial option element");
    }
    return opt;
}

export const CustomSelect: FC<CustomSelectProps> = (props) => {
    const {
        className,
        initValue,
        OnChange,
        children
    } = props;

    const options = useMemo(
        () =>
            children.map((ch) => {
                return createOption(ch);
            }),
        [children]
    );

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(initOption(initValue, options));
    const dropdownRef = useRef(null);
    const documentRef = useRef(document);

    const handleOptionClick = (option: Option) => {
        if (OnChange !== undefined && selectedOption.text !== option.text) {
            OnChange(option.text);
        }
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        documentRef.current.addEventListener("click", handleClickOutside);

        return () => {
            documentRef.current.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef, documentRef]);

    const optionsContainers = useMemo(
        () =>
            options.map((option, index) => {
                const className = classNames(
                    styles.dropdownOption,
                    {},
                    [option.text === selectedOption.text ? styles.dropdownOptionSelected : ""]
                );

                return (
                    <div key={index} className={className}
                         onClick={() => handleOptionClick(option)}>
                        {option.element}
                    </div>
                );
            }),
        [options, selectedOption]
    );

    return (
        <div ref={dropdownRef} className={classNames(styles.dropdownContainer, {}, [])}>
            <div
                className={classNames(styles.CustomSelectHeader, {}, [className, isOpen ? styles.CustomSelectHeaderFocus : ""])}
                onClick={toggleDropdown}
            >
                {selectedOption.text}
            </div>
            {isOpen && <div className={classNames(styles.dropdownOptions, {}, [])}>{optionsContainers}</div>}
        </div>
    );
};