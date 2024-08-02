import "./bootstrap";
import AppLayout from "@/Layouts/AppLayout.vue";
import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";

createInertiaApp({
    progress: true,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Register the AppLayout component globally
        app.component("AppLayout", AppLayout);
        app.component("Link", Link);
        app.use(plugin);
        app.mount(el);
    },
});
