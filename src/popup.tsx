import App from "~app/App";
import ThemeProvider from "~app/providers/ThemeProvider/ThemeProvider";

function IndexPopup() {

    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

export default IndexPopup
