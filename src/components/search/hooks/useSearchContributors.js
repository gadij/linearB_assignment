import { useState, useEffect } from "react";
import { getContributors } from "../../../fetchData/fetchData";
import useDebounce from '../../../utils/useDebounce'

export default function useSearchContributors(data) {
    const [contributors, setContributors] = useState([]);
    const reposValues = useDebounce(data, 300);

    useEffect(() => {
        const fetchData = async () => {
            if (reposValues && reposValues.length > 0) {
                const promises = reposValues.map(repo => {
                    return getContributors(repo.owner, repo.repoName);
                });
                await Promise.all(promises)
                    .then(values => {
                        setContributors(values);
                        console.log(values);
                    })
                    .catch(error => {
                        console.error(error.message);
                    });
            }
        };
        fetchData();
    }, [reposValues]);
    return [contributors];
}
