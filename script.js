const URL = "https://api.github.com/users/anidc/repos"

function fetchData() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.map(repo => {
                const card = document.createElement("div")
                card.classList.add("github-card")
                const h2 = document.createElement("h2")
                const github_section = document.querySelector(".github-div")
                github_section.appendChild(card)
                h2.textContent = repo.name
                const img = document.createElement("img")
                img.classList.add("github-card-image")
                card.appendChild(img)
                card.appendChild(h2)
                if (repo.language === "CSS") {
                    img.src = "images/css.svg"
                } else if (repo.language === "JavaScript") {
                    img.src = "images/js.png"
                } else if (repo.language === "TypeScript") {
                    img.src = "images/ts.png"
                } else if (repo.language === "HTML") {
                    img.src = "images/html.png"
                }
                card.addEventListener('click', function () {
                    openInNewTab(repo.html_url)
                });
            })
        })
}

fetchData()

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
}

function viewScroller(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

let button = document.getElementById("scroll-top")
function isOnTopCheck() {
    if (window.scrollY === 0) button.classList.add("hide")
    if (window.scrollY !== 0) button.classList.remove("hide")

}

window.addEventListener("scroll", isOnTopCheck)

function scrollToTop() {
    document.getElementById("homeid").scrollIntoView({ behavior: "smooth" })
    button.classList.add("hide")
}

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.querySelector("#email")
    const companyName = document.querySelector("#name")
    const textarea = document.querySelector("#message")

    Email.send({
        SecureToken: "b5d70d6c-f591-4246-b174-c70da8d61c96",
        To: 'anidcamdzic@hotmail.com',
        From: email.value,
        Subject: `${companyName.value}`,
        Body: textarea.value
    }).then(
        message => alert("Your message has been sent successfully!")
    );

    email.value = ""
    companyName.value = ""
    textarea.value = ""

})


function showMenu() {
    document.getElementById("menu-bar").classList.add("show")
    document.getElementById("menu-bar").classList.remove("hide")
    setTimeout(() => {
        document.getElementById("menu-bar").style.left = 0
    }, 1000);
}

function hideMenu() {
    document.getElementById("menu-bar").classList.add("hide")
    document.getElementById("menu-bar").classList.remove("show")
    document.getElementById("menu-bar").style.left = "-100%"

}
