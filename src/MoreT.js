import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import "./MoreT.css";

const MoreT = () => {
    return (
        <div className="moret">
            <div className="moret__in">
                <NotificationsIcon />
                <p>Notification Preferences</p>
            </div><hr />
            <div className="moret__in">
                <MonetizationOnIcon />
                <p>Sell on Flipkart</p>

            </div><hr />
            <div className="moret__in">
                <LiveHelpIcon />
                <p>24*7 Customer Care</p>

            </div><hr />
            <div className="moret__in">
                <TrendingUpIcon/>
                <p>Advertize</p>

            </div><hr />
            <div className="moret__in">
                <GetAppIcon/>
                <p>Download App</p>


            </div>
        </div>
    )
}

export default MoreT

