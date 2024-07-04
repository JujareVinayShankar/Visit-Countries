import './index.css'

const VisitedCountriesList = props => {
  const {visitedCountry, removeIsVisited} = props
  const {id, name, imageUrl} = visitedCountry
  const onClickButton = () => {
    removeIsVisited(id)
  }
  return (
    <li className="flag-item">
      <img src={imageUrl} alt="thumbnail" className="flag-image" />
      <div className="name-container">
        <p className="flag-name">{name}</p>
        <button className="remove-button" type="button" onClick={onClickButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
