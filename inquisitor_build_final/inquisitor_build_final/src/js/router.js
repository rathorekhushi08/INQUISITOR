// HARD RESET - ye line HATA DE
// if (!localStorage.getItem("session")) {
//     history.replaceState(null, "", "index.html");
//     location.hash = "login";
// }

async function loadPage(p) {
    const logged = localStorage.getItem("session") === "1";

    // NOT logged in -> force login
    if (!logged && p !== "login") {
        p = "login";
        location.hash = "login";
    }

    // Logged in + trying login -> go dashboard
    if (logged && p === "login") {
        p = "dashboard";
        location.hash = "dashboard";
    }

    try {
        let pageHTML = await fetch(`./src/pages/${p}.html`).then(r => r.text());
        let navbarHTML = logged ? await fetch("./src/components/navbar.html").then(r => r.text()) : "";
        
        document.getElementById("app").innerHTML = navbarHTML + pageHTML;
    } catch(err) {
        console.error("Error:", err);
    }
}

// Initial load
window.addEventListener("load", () => {
    const isLoggedIn = localStorage.getItem("session") === "1";
    const page = isLoggedIn ? (location.hash.replace("#", "") || "dashboard") : "login";
    loadPage(page);
});

window.addEventListener("hashchange", () => {
    const page = location.hash.replace("#", "") || "login";
    loadPage(page);
});