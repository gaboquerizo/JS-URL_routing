class Router {
    init() {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = e.target.getAttribute('href');
                // console.log(url);
                this.nav(url);
            })
        });

        window.addEventListener('popstate', (e) => {
            this.nav(e.state.route, false);
        });
    }

    nav(route, addToHistory = true) {
        if (addToHistory) {
            // console.log(route);
            history.pushState({route}, null, route)
        }

        let el;

        switch (route) {
            case '/':
                el = document.createElement('h1');
                el.textContent = "👋 Bienvenido"
                break;
            case '/store':
                el = document.createElement('h1');
                el.textContent = "🛒 Tienda"
                break;
            case '/profile':
                el = document.createElement('h1');
                el.textContent = "👤 Mi perfil"
                break;
        }

        if (el) {
            const entry = document.querySelector('#main-content')
            entry.innerHTML = "";
            entry.appendChild(el);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
};

export default Router;