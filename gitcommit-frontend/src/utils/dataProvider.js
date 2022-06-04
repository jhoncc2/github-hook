import { useEffect, useState } from 'react';

// todo: move to configuration file
// base backend url
const baseUrl = 'http://localhost:4000'

/**
 * Custom hook to collect commit list from backend
 * @returns object[] - list of commits
 */
export const useCommitList = (needsRefresh) => {
  const [ commitList, setCommitList ] = useState([])
  
  useEffect(() => {
    // TODO: change mock path when ready
    fetch(baseUrl + '/commits/mock')
      .then(response => 
        // update
        response.json()
      ).then(data => {
        setCommitList(data)
      })
  }, [needsRefresh])
  return commitList
}