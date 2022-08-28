import Nav from '../client/components/Nav'
import CreateAccountForm from "../client/components/CreateAccountForm"
import { useState } from 'react'
import { useCookies } from "react-cookie"
import CreateAccountForm from '../client/components/CreateAccountForm'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsLoggedIn(true)
    }

    return (
        <div className="home-page-background">
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsLoggedIn={setIsLoggedIn}
            />
            <div className="home">
                <h1 className="home-title">Live Laugh Love💞</h1>
                <button className="home-button" onClick={handleClick}>
                    {authToken ? 'Log Out' : 'Register'}
                </button>


                {showModal && (
                    <CreateAccountForm setShowModal={setShowModal} isLoggedIn={isLoggedIn}/>
                )}
            </div>
        </div>
    )
}
export default Home