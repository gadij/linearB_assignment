import { useState, useEffect } from "react";

export default function useExtractNameAndOwner(repos) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (repos && repos.length > 0) {
            const collection = repos.map(repo => {
                return {
                    owner: repo.owner && repo.owner.login,
                    repoName: repo.name
                }
            });
            setData(collection);

        }
    }, [repos]);
    return [data];
}
