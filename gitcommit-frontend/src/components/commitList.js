import Commit from './commit'
import './commitList.css'

/**
 * CommitList component
 * @param {object[]} commitList
 */
const CommitList = ({commitList}) => {
  console.log(commitList)

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