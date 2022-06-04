import './utils.css'

/**
 * A Formated date
 */
const FormatedDate = ({date}) => {
  const parsedDate = new Date(date)
  
  // simple parse
  // const stringDate = new Intl.DateTimeFormat('en-US')
  //                                 .format(parsedDate)

  // readable version
  const stringDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric'})
          .format(parsedDate)  
  return (
    <span> {stringDate} </span>
  )
}

export default FormatedDate