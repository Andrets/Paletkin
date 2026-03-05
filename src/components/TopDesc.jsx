import './TopDesc.css'

function TopDesc({title, body}) {
  return (

    <div className="top-text">
    <h1>{title}</h1>
    <p>
        {body}
    </p>
    </div>
  )
}

export default TopDesc