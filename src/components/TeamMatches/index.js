// Write your code here

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="TeamMatches-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader color="green" height={80} width={80} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="Team-Image" />
            <p className="description">Latest Matches</p>

            <LatestMatch details={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} details={eachMatch} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
