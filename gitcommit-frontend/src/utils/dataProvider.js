import { useEffect, useState } from 'react';

// todo: move to configuration file
// base backend url
const baseUrl = 'http://localhost:4000'
const baseResponse = { data: [], error: false, loading: false }

/**
 * Custom hook to collect commit list from backend
 * @returns object[] - list of commits
 */
export const useCommitList = (needsRefresh) => {
  const [ response, setResponse ] = useState(baseResponse)
  
  useEffect(() => {
    // TODO: change mock path when ready
    fetch(baseUrl + '/commits/mock')
      .then(response => 
        response.json()
      ).then(data => 
        // TODO: we do not collect error message
        setResponse({data: data, error: false, loading: false})
      ).catch(error => setResponse({data: {}, error: true, loading: false}))
  }, [needsRefresh])

  return [response.data, response.error, response.loading]
}