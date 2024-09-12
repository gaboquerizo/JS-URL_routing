// console.log('File -router.module.js- connected successfully ✅');

const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "../pages/not-found.page.html",
    "/": "../pages/edit-profile.page.html",
    "/edit-profile": "../pages/edit-profile.page.html",

    "/account-settings": "../pages/account-settings.page.html",
    "/profile-visibility": "../pages/profile-visibility.page.html",
    "/claim": "../pages/claim.page.html",
    "/permissions": "../pages/permissions.page.html",
    "/notifications": "../pages/notifications.page.html",
    "/privacy": "../pages/privacy.page.html",
    "/security": "../pages/security.page.html"
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    const html = await fetch(route).then((data) => data.text());
    document.querySelector("[data-rendering-area]").innerHTML = html;
}

window.onpopstate = handleLocation;
window.router = router;

handleLocation();