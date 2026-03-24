import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competing_team,
    date,
    venue,
    result,
    first_innings,
    second_innings,
    man_of_the_match,
    umpires,
    competing_team_logo,
  } = details

  return (
    <div className="LatestMatch-container">
      <div className="Match-first-container">
        <h1 className="team-name">{competing_team}</h1>
        <p className="date">{date}</p>
        <p className="description">{venue}</p>
        <p className="description">{result}</p>
      </div>
      <img
        src={competing_team_logo}
        alt={`latest match ${competing_team}`}
        className="image"
      />
      <div className="Match-second-container">
        <p className="description">First innings</p>
        <p className="description">{first_innings}</p>
        <p className="description">Second innings</p>
        <p className="description">{second_innings}</p>
        <p className="description">Man Of The Match</p>
        <p className="description">{man_of_the_match}</p>
        <p className="description">Umpires</p>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
