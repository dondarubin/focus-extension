import type { ReactElement } from "react";

export function getInnerText(el: ReactElement): string {
    const children = el.props.children;
    let text = "";

    if (Array.isArray(children)) {
        children.every(ch => {
            if (typeof ch === "string") {
                text = ch;
                return false;
            }
            return true;
        });
    } else {
        if (typeof children === "string") {
            text = children;
        }
    }

    return text;
}