import './index.css'

const CountryItem = props => {
  const {countryItem, toggleIsVisited} = props
  const {id, name, isVisited} = countryItem
  const buttonStyle = isVisited ? 'visited-button' : 'visit-button'
  const buttonText = isVisited ? '' : 'Visit'
  const paraText = isVisited ? 'Visited' : ''
  const paraClass = isVisited ? 'para-visited' : ''
  const onClickButton = () => {
    toggleIsVisited(id)
  }
  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      <div className="button-container">
        <button
          type="button"
          className={`button ${buttonStyle}`}
          onClick={onClickButton}
        >
          {buttonText}
        </button>
        <p className={`paragraph ${paraClass}`}>{paraText}</p>
      </div>
    </li>
  )
}

export default CountryItem
