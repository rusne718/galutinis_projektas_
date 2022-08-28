import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const CreateAccountForm = ({ setShowModal,  isLoggedIn }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie ] = useCookies(null)

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)


    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isLoggedIn && (password !== confirmPassword)) {
                setError('Passwords do not match')
                return
            }

            const response = await axios.post('http://localhost:8000/signup', { email, password })

            setCookie('Email', response.data.email)
            setCookie('UserId', response.data.userId)
            setCookie('AuthToken', response.data.token)

            const success = response.status === 201
            if (success && isSignUp) navigate ('/newUsers')
            if (success && !isSignUp) navigate ('/dashboard')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="create-account-form">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isLoggedIn ? 'REGISTER': 'LOG IN'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isLoggedIn && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="submit-form-button" type="submit"/>
                <p>{error}</p>
            </form>

        </div>
    )
}
export default CreateAccountForm