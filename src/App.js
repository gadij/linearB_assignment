import React, { useState, useCallback, useEffect } from 'react';
import useSearchContributors from "./components/search/hooks/useSearchContributors";
import useSearchRepo from "./components/search/hooks/useSearchRepo";
import { getOwnerAndRepoName } from './utils/dataManipulation'
import Search from "./components/search/Search";
import ContributersList from './components/contributerList/List'

import './App.scss';


export default function App() {
  const [query, setQuery] = useState('')
  const [repos] = useSearchRepo(query);
  let [repoNamesAndOwner, setRepoNamesAndOwner] = useState([]);
  const [contributorsByRepoName] = useSearchContributors(repoNamesAndOwner);

  const callBack = useCallback((value) => {
    setQuery(value);
  }, [setQuery])

  useEffect(() => {
    setRepoNamesAndOwner(getOwnerAndRepoName(repos))
  }, [repos])

  return (
    <div className="App">
      <h1>Please insert a github user name</h1>
      <div className="container">
        <Search onQueyChange={callBack} />

        <div className='contirbuters__container'>
          {repos.length > 0 &&
            <h2 className='userName--repo'>
              {`${query}'s repositories`}
            </h2>}
          <ContributersList data={contributorsByRepoName} />
        </div>
      </div>
    </div>
  );
}

