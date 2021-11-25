javascript: (function() {
    async function getRepo() {
        let sinceVal = Math.floor(Math.random() * 200000000) + 1;
        let url = "https://api.github.com/repositories?since=" + sinceVal;

        const data = await fetch(url).then(response => response.json());
        
        let repoName = data[0]["full_name"];
        let repoURL = "https://github.com/" + repoName;
        open(repoURL);
    }

    getRepo();
})()