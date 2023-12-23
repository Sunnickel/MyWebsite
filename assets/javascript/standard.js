window.addEventListener("load", getFile)

async function getFile() {
    copyrightYear()

    await document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
    await document.documentElement.setAttribute('lang', localStorage.getItem("lang"));
    document.getElementById("changeTheme").src = "assets/pictures/" +  localStorage.getItem("theme") + ".svg"

    await loadLang()

    let file = window.location.pathname
    let page = file.split("/").pop();
    switch (page.split(".")[0]) {
        case "index":
            await twitchSize()
            break
        case "about":
            break
        case "projects":
            await projects()
            break
    }
}

function twitchSize() {
    const height = document.documentElement.clientHeight
    let twitchEmbed = document.getElementById("twitch-embed")
    twitchEmbed.height = height / 3.0477158005016032254992221975301
}

function copyrightYear() {
    let copyright = document.getElementById("copyright")
    copyright.innerHTML += new Date().getFullYear() + " - "
}

async function projects() {
    const apiUrl = `https://api.github.com/users/sunnickel/repos`
    const repoInfos = []
    const el = document.getElementById("repos")

    await fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                repoInfos.push(new Array([data[i]["name"], data[i]["created_at"], data[i]["language"], data[i]["description"], data[i]["html_url"]]))
            }
            console.log(repoInfos)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    for (let i = 0; i < repoInfos.length; i++) {
        let name = repoInfos[i][0][0]
        let description = repoInfos[i][0][3]
        let language = repoInfos[i][0][2]
        console.log(repoInfos[i][0][1].split('T')[0])
        let date = repoInfos[i][0][1].split('T')[0].split("-")
        let url = repoInfos[i][0][4]
        el.innerHTML += "<div class=\"repo\">\n" +
            "                <h3>" + name + "</h3>\n" +
            "                <div>" + description + "\n </div>" +
            "                <div>" + language + " | " + date[2] + "." + date[1] + "." + date[0] + "<a href='" + url + "'>GitHub</a></div>\n" +
            "            </div>"
    }
}

function changeTheme() {
    let img = document.getElementById("changeTheme")
    let picture;

    if (localStorage.getItem("theme") === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        picture =  "dark.svg"
        localStorage.setItem("theme", "dark")
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        picture =  "light.svg"
        localStorage.setItem("theme", "light")
    }

    img.src = "assets/pictures/" + picture
}

async function changeLanguage() {
    if (localStorage.getItem("lang") === "de") {
        document.documentElement.setAttribute('lang', 'en');
        localStorage.setItem("lang", "en")
    } else {
        document.documentElement.setAttribute('lang', 'de');
        localStorage.setItem("lang", "de")
    }
    await loadLang()
}


async function loadLang() {
    let lang = localStorage.getItem("lang")

    let img = document.getElementById("changeLanguage")
    let picture;

    let about = document.getElementById("aboutButton")
    let home = document.getElementById("homeButton")
    let projects = document.getElementById("projectsButton")

    let dicepoker_h3 = document.getElementById("dicepoker-h3")
    let dicepoker_desc = document.getElementById("dicepoker-desc")

    let githubLink = document.getElementById("githubLink")
    let twitchLink = document.getElementById("twitchLink")
    let tiktokLink = document.getElementById("tiktokLink")
    let instaLink = document.getElementById("instaLink")

    if (lang === "de") {
        picture = "de.svg"

        about.textContent = "Über Mich"
        home.textContent = "Startseite"
        projects.textContent = "Projekte"

        dicepoker_h3.textContent = "Würfelpoker"
        dicepoker_desc.textContent = "Ein einfaches Würfelpoker Spiel (Noch nicht fertig)"

        githubLink.textContent = "- Mein Github -"
        twitchLink.textContent = "- Mein Twitch -"
        tiktokLink.textContent = "- Mein TikTok -"
        instaLink.textContent = "- Mein Insta -"
    } else {
        picture = "en.svg"

        about.textContent = "About Me"
        home.textContent = "Home"
        projects.textContent = "Projects"

        dicepoker_h3.textContent = "Dice Poker"
        dicepoker_desc.textContent = "A game of dice poker (Not finished yet)"

        githubLink.textContent = "- My Github -"
        twitchLink.textContent = "- My Twitch -"
        tiktokLink.textContent = "- My TikTok -"
        instaLink.textContent = "- My Insta -"
    }

    img.src = "assets/pictures/" + picture
}