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
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engg</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility  className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engg</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility  className='widgetSmIcon'  />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engg</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engg</span>
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