import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './User.css';

export default function User() {
    return (
        <div className="user">
            <div className="usetTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                     <button className='userAddButton' >Create</button>
                </Link>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src="/achilles.jpg" alt="" className="userShowImg" />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Jane Doe</span>
                                <span className="userShowUserTitle">Software Engg</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className='userShowTitle' />
                                <span className="userShowInfoTitle">jane123doe</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className='userShowTitle' />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div>
                            <div className="userShowInfo">
                                <PhoneAndroid className='userShowTitle' />
                                <span className="userShowInfoTitle">+ 1 123 456 789</span>
                            </div>
                            <MailOutline className='userShowTitle' />
                            <span className="userShowInfoTitle">jane123doe@mail.com</span>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label> Username </label>
                                    <input type="text" placeholder='johndoe12' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label> Full Name </label>
                                    <input type="text" placeholder='John Doe' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email </label>
                                    <input type="email" placeholder='john@doe.com' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone </label>
                                    <input type="tel" placeholder='+1 123 456 789' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address </label>
                                    <input type="text" placeholder='New York USA' className='userUpdateInput' />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="/achilles.jpg" alt="" className="userUpdateImg" />
                                    <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                    <input type="file" id="file"  style={{ display: "none"}}/>
                                </div>
                                <button className="userUpdateButton">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}