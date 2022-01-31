import './WidgetLg.css';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton '+ type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </ tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">2 jan 2020</td>
                    <td className="widgetLgAmount">$200</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">17 jan 2020</td>
                    <td className="widgetLgAmount">$120</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">12 jun 2020</td>
                    <td className="widgetLgAmount">$37</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
            </table>
        </div>
    )
}