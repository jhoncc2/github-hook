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
  const [commitList, error, loading, reload] = useCommitList()

  // TODO: remove: small log
  console.log('data loaded')

  return (
    <div className='wrapperList'>
      <div className='title'>
        COMMIT LIST
        <button 
          className='refreshButton'
          onClick={()=> {reload({})}}>
          Refresh
          <img 
            src='/enlace.png'
            alt='refresh'
            />
        </button>
        
      </div>
      <div className='commitList'>
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
    </div>
  )
}

export default CommitList