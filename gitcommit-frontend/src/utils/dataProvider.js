import { useEffect, useState } from 'react';

// todo: move to configuration file
// base backend url
const baseUrl = 'http://localhost:4000'
const baseResponse = { data: [], error: false, loading: false }

/**
 * Custom hook to collect commit list from backend
 * @returns object[] - list of commits
 */
export const useCommitList = () => {
  const [ response, setResponse ] = useState(baseResponse)
  const [needsRefresh, setNeedsRefresh] = useState({})

  useEffect(() => {
    // TODO: change mock path when ready
    // fetch(baseUrl + '/commits/mock')
    fetch(baseUrl + '/commits')
      .then(response => 
        response.json()
      ).then(data => 
        // TODO: implement: we do not collect error message
        setResponse({data: data, error: false, loading: false})
      ).catch(error => setResponse({data: {}, error: true, loading: false}))
  }, [needsRefresh])

  return [response.data, response.error, response.loading, setNeedsRefresh]
}