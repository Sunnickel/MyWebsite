window.addEventListener("load", getFile)

function getFile() {
    copyrightYear()
    let file = window.location.pathname
    let page = file.split("/").pop();
    console.log(page)
    switch (page.split(".")[0]) {
        case "index":
            twitchSize()
            break
        case "about":
            break
        case "projects":
            projects()
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