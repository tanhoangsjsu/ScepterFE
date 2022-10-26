import "../Modals/modal.css"
import Text from "../../assest/Text.svg"
import UserImage from "../../assest/Avatar.png"
import { useSelector } from "react-redux";
const AssistanceModal = () => {
    
    const user = useSelector((state)=> state.auth.login.currentUser);
    const handleText = () =>{
        alert("Feature not available in the Beta version!!!")
    }
    return (
    <div className="action-items-container">
        <div className="header-container">
            <label className="logo"> SCEPTER </label>
            <div className="profile-container">
                <div className="user-name">{user.username}</div>
                <img className ="user-img" src={UserImage}></img>
            </div>
        </div>      
        
        <div className="action-buttons-container">
            <div className="action-button">
                {/* <img src={Car}></img> */}
                <h3>Request</h3>
            </div>
            <div className="action-button" onClick={handleText}>
                <img src={Text}></img>
                <h3>Text</h3>
            </div>
        </div> 
    </div>
    );
} 
export default AssistanceModal;