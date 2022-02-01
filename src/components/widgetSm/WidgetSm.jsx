import { Visibility } from '@material-ui/icons';
import './WidgetSm.css';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Newly Joined Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <p className="widgetSmUsername">Johnny Doe</p>
                        <p className="widgetSmUserTitle">Software Engg</p>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility  className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <p className="widgetSmUsername">Marie Jacobs</p>
                        <p className="widgetSmUserTitle">Cloud Developer</p>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility  className='widgetSmIcon'  />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <p className="widgetSmUsername">Jhon Simmons</p>
                        <p className="widgetSmUserTitle">UI Designer</p>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <p className="widgetSmUsername">Olga Minakova</p>
                        <p className="widgetSmUserTitle">Software Engg</p>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}