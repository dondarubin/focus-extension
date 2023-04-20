export function extractBaseUrl(url: string): string | null {
    try {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        if (url.indexOf(".") === -1) {
            return null;
        }

        const parsedUrl = new URL(url);
        return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
    } catch (error) {
        return null;
    }
}