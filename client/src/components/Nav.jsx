import mainLogo from './images/dating-app-logo.png'

const Nav = ({ authToken, setShowModal, showModal, setIsLoggedIn }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={mainLogo}
          alt="logo"
        />
      </div>

      {!authToken (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;