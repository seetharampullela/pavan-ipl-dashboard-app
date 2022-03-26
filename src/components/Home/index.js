// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsArray = await response.json()
    const updatedTeamsList = teamsArray.teams.map(each => ({
      name: each.name,
      teamImageUrl: each.team_image_url,
      id: each.id,
    }))
    this.setState({teamList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader" className="loader-oval">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="logo-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo-image"
              />
              <h1 className="dash-heading">IPL Dashboard</h1>
            </div>
            <div className="team-list-container">
              <ul className="list-elements">
                {teamList.map(each => (
                  <TeamCard teamItem={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Home
