import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamListData()
  }

  getIplTeamListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const listOfAllTeams = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeamList: listOfAllTeams, isLoading: false})
  }

  render() {
    const {iplTeamList, isLoading} = this.state

    return (
      <div className="Home-container">
        <div className="Ipl-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="red" height={80} width={80} />
          </div>
        ) : (
          <ul className="TeamCard-set-container">
            {iplTeamList.map(eachTeamList => (
              <TeamCard iplTeamList={eachTeamList} key={eachTeamList.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
