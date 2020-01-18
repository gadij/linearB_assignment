import { useState, useEffect } from "react";
import { getRepos } from "../../../fetchData/fetchData";
import useDebounce from '../../../utils/useDebounce'

export default function useSearchRepo(query) {
    const [repos, setRepos] = useState([]);
    const searchTerm = useDebounce(query, 300);
    useEffect(() => {
        const fetchData = async () => {
            if (searchTerm) {
                const data = await getRepos(searchTerm);
                setRepos(data);
            }
        };
        fetchData();
    }, [query, searchTerm]);
    return [repos];
}