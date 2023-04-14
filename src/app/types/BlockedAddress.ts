export type BlockedAddress = {
    addr: string
    blocked: boolean
}

export function newBlockedAddress(addr: string, blocked: boolean): BlockedAddress {
    return { addr, blocked };
}