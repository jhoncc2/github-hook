import { useState } from 'react';
import { useCommitList } from '../utils/dataProvider'
import Commit from './commit'
import Loader from './loader'
import './commitList.css'
import './utils.css'
import ErrorMessage from './errorMessage';

/**
 * CommitList component
 * @param {object[]} commitList
 */
const CommitList = () => {
  const [needsRefresh, setNeedsRefresh] = useState(false)
  const [commitList, error, loading] = useCommitList(needsRefresh)

  console.log('data:', commitList)

  return (
    <div className='CommitList'>
      {loading
        ?  <Loader/>
        : error
          // TODO: manage messages on a separate file
          ? <ErrorMessage message={"Something unexpected ocurred!"}/>
          : commitList.map((commit) => {
            return (
              <div key={commit.sha}>
                <Commit {...commit} />
              </div>
            )
          })
      }
    </div>
  )
}

export default CommitList