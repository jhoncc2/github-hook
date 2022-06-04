import './commit.css'

/**
 * Commit componet
 * @param {object} commit
 */
const Commit = ({commit}) => {
  return (
    <div className='Commit'>
      <div className='message'>{commit.message}</div>
    </div>
  )
}

export default Commit