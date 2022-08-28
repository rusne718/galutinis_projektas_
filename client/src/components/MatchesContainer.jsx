import MatchesHeader from './MatchesHeader'
import Matches from './Matches'
import { useState } from 'react'

const MatchesContainer = ({ user }) => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="matches-container">
            <MatchesHeader user={user}/>

            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>

            </div>

            {!clickedUser && <Matches matches={user.matches} setClickedUser={setClickedUser}/>}
        </div>
    )
}

export default MatchesContainer