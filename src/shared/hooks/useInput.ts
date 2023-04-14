import { useState } from "react";

export function useInput(
    initialValue = "",
    hidePlaceholderOnFocus = true,
    hidePlaceholderOnSubmit = true,
    placeHolderValue: string = ""
) {
    const [value, setValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    const clear = () => {
        setValue("");
        setIsSubmitted(false);
    };

    const resetValue = (newValue) => {
        setValue(newValue);
    };

    const showPlaceholder = !hidePlaceholderOnSubmit || (hidePlaceholderOnSubmit && !isSubmitted);

    return {
        value,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onSubmit: handleSubmit,
        placeholder: showPlaceholder && (hidePlaceholderOnFocus && isFocused || !hidePlaceholderOnFocus) ? "" : placeHolderValue,
        clear,
        resetValue
    };
}

