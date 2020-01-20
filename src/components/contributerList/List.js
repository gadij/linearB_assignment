import React from 'react';

export default function ContirbutersList({ data }) {
    return (
        <>
            {data && data.map((repoData, index) => {
                return (
                    <div className="search-avatar__container">
                        <span className='repoName'>{repoData.repoName}</span>
                        <span className='avatars__list'>
                            {
                                repoData
                                && repoData.contributors
                                && repoData.contributors.length > 0
                                && repoData.contributors.map(contributor => {
                                    return (<img className='search-avatar' alt='avatar' key={index} src={contributor.avatar_url} />)
                                })
                            }
                        </span>
                    </div>)
            })}
        </>
    )
}