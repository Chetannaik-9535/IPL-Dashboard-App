import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplTeamList} = props
  const {id, name, teamImageUrl} = iplTeamList

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="TeamCard-container">
        <img src={teamImageUrl} alt={name} className="Team-Logo" />
        <p className="Team_name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
