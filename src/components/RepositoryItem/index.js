// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, imageUrl, starsCount, forksCount, issuesCount} =
    repositoryDetails
  return (
    <li className="repository-item">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stats-icon"
        />
        <p className="stats-count">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-count">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
