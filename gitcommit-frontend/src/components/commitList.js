import { useState } from 'react';
import { useCommitList } from '../utils/dataProvider'
import Commit from './commit'
import './commitList.css'

/**
 * CommitList component
 * @param {object[]} commitList
 */
const CommitList = () => {
  const [needsRefresh, setNeedsRefresh] = useState(false)
  const commitList = useCommitList(needsRefresh)
  
  console.log('a.', commitList)
  return (
    <div className='CommitList'>
      {commitList.map((commit) => {
        // pass all the data needed
        return (
          <div key={commit.sha}>
            <Commit {...commit} />
          </div>
        )
      })}
    </div>
  )
}

export default CommitList