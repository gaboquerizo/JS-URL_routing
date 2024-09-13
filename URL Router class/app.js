import Router from "./Router.js";

window.app = {}

app.router = new Router;

window.addEventListener('DOMContentLoaded', () => {
    app.router.init();
})