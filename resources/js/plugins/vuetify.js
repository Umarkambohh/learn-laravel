// resources/js/plugins/vuetify.js

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

const customTheme = {
    dark: false,
    colors: {
        primary: "#03A9F4", // Replace with your custom color
        secondary: "#03A9F4", // Optional: Customize secondary color
        // Add more custom colors if needed
    },
};

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi", // This is already the default value - only for display purposes
    },
    theme: {
        defaultTheme: "customTheme", // Use the custom theme
        themes: {
            customTheme,
        },
    },
});

export default vuetify;
