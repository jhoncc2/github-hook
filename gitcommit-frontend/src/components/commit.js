import './commit.css'

/**
 * Commit componet
 */
const Commit = ({commit}) => {
  return (
    <div className='Commit'>
      <div className='message'> {commit.message}</div>
      <div className='info'> 
        {/* <div className='name'>{commit.author.name}</div> */}
        <div className='date'>{commit.author.date}</div>
        <div className='email'>{commit.author.email}</div>
      </div>
    </div>
  )
}

export default Commit