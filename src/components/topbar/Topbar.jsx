import './Topbar.css';
import profilePic from  '/achilles.jpg';
import { NotificationsNone, Language, Settings, Menu, Close } from '@material-ui/icons';

const Topbar = ({ setOpenSideBar, isOpen }) => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Admin</div>
                    <div className="menuButton" onClick={() => setOpenSideBar(prev => !prev)}>
                        {isOpen  ? <Close className='menuIcon' /> : <Menu className='menuIcon' />} 
                    </div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>en</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={profilePic} alt="profile Pic" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
export default Topbar;