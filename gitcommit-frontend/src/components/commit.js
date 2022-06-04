import './commit.css'

/**
 * Commit componet
 */
const Commit = ({commit}) => {
  return (
    <div className='Commit'>
      <div className='message'>{commit.message}</div>
    </div>
  )
}

export default Commit