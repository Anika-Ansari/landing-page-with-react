
import BAN from '../images/banner-man.png'
function Center() {
    return (
        <div className='center'>
            <div>
                <p>
                    Currently available for freelance <br />
                    worldwide
                </p>

                <hr></hr>
                <h1>Creative Visual  <br></br>Designer</h1>
            </div>
            <div className="banner">
                <img src={BAN} alt=""></img>
            </div>
        </div>
    )
}
export default Center