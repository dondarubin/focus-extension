export function minString2Number(str: string): number {
    return +str.replace(/min\s*/g, "");
}