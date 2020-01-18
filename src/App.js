import React, { useState, useCallback } from 'react';
import useSearchContributors from "./components/search/hooks/useSearchContributors";
import useSearchRepo from "./components/search/hooks/useSearchRepo";
import useExtractNameAndOwner from './components/search/hooks/useExtractNameAndOwner';
import Search from "./components/search/Search";
import ContributersList from './components/contributerList/List'

import './App.scss';


export default function App() {
  const [query, setQuery] = useState('')
  const [repos] = useSearchRepo(query);
  const [repoNamesAndOwner] = useExtractNameAndOwner(repos)
  const [contributorsByRepoName] = useSearchContributors(repoNamesAndOwner);

  const callBack = useCallback((value) => {
    setQuery(value);
  }, [setQuery])

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

