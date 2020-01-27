export const getOwnerAndRepoName = (data) => {
    let collection = []
    if (data && data.length > 0) {
        collection = data.map(repo => {
            return {
                owner: repo.owner && repo.owner.login,
                repoName: repo.name
            }
        });
    }
    return collection;
}