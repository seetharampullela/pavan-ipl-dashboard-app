// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    // id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    // matchStatus,
  } = latestMatchDetails

  return (
    <div>
      <h1 className="latest-match-header"> Latest Matches </h1>
      <div className="latest-match-bg-container">
        <div>
          <p className="team-header">{competingTeam}</p>
          <p className="team-para">{date}</p>
          <p className="team-para">{venue}</p>
          <p className="team-para">{result}</p>
        </div>
        <div className="competing-team-logo-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="right-elements">
          <p className="right-para-elements">First Innings</p>
          <p className="right-para-elements-line">{firstInnings}</p>
          <p className="right-para-elements">Second Innings</p>
          <p className="right-para-elements-line">{secondInnings}</p>
          <p className="right-para-elements">Man of the Match</p>
          <p className="right-para-elements-line">{manOfTheMatch}</p>
          <p className="right-para-elements">Umpires</p>
          <p className="right-para-elements-line">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
