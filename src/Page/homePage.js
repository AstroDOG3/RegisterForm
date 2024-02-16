import { useNavigate } from "react-router-dom";
import './homePage.css'
function Homepage() {
    const navigate  = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login')
    }
    return (
      <div className='wrapper'>
          <h1>Homepage</h1>
          <form onSubmit={handleSubmit}>
              <div className = "personalInfo">
                  <strong>Username : </strong><br></br>
                  <p id = "info">Mixzas123</p>
                  <strong>Name : </strong>
                  <p id = "info">Paramet Kitchanwit</p>
                  <strong>Gender : </strong>
                  <p id = "info">Male</p>
                  <strong>Date of Birth : </strong>
                  <p id = "info">19/12/2002</p>
                  <strong>E-Mail : </strong>
                  <p id = "info">paramet.kitchanwit@gmail.com</p>
              </div>
              <div className = "logout-button">
                <button type ="submit" id = "logout">Log out</button>
              </div>
          </form>
      </div>
    );
  }
  
  export default Homepage;