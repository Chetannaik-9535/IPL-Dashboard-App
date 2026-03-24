import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competing_team_logo, competing_team, result, match_status} = details

  return (
    <li className="MatchCard-container">
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="image"
      />
      <p className="team-name">{competing_team}</p>
      <p className="description">{result}</p>
      <p className={`status ${match_status === 'Won' ? 'won' : 'lost'}`}>
        {match_status}
      </p>
    </li>
  )
}

export default MatchCard
