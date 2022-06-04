import './commit.css'
import FormatedDate from './formatedDate'

/**
 * Commit componet
 */
const Commit = ({commit, html_url}) => {
  return (
    <div className='commitWrapper'>
      <a className='commitLink' href={html_url} >
        {/* TODO: this is a workaround  */}
        <img className='imageLink' src='/enlace.png' alt="image"/>
      </a>
      <div className='commit'>
        <div className='message'> {commit.message}</div>
        <div className='info'> 
          <div className='date'>
            <FormatedDate date={commit.author.date} />
          </div>
          <div className='email'>{commit.author.email}</div>
        </div>
      </div>
    </div>
  )
}

export default Commit