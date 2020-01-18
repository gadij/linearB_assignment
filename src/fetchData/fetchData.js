const getRepos = async (userName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}/repos`);
        if (response && response.status === 404) {
            console.error('Resouce not found');
            return []
        }
        const json = await response.json() || [];
        return json;
    } catch (err) {
        console.error(err);
    }
}

const getContributors = async (userName, repoName) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/contributors`);
        if (response.status === 404) {
            console.error('Resouce not found');
            return []
        }
        if (response.statusText === 'No Content') {
            return [];
        }
        const json = await response.json() || [];
        return { repoName, contributors: json };
    } catch (err) {
        console.error(err);
    }
}

export { getContributors, getRepos }


