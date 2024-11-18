import { Link } from 'react-router-dom';
import { FaHome, FaAppleAlt, FaHeartbeat, FaHistory, FaStar } from 'react-icons/fa'; // Import icons from Font Awesome
import '../styles/Sidebar.css';  // Sidebar-specific styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/home"><FaHome size={20} /> Home</Link></li>
                <li><Link to="/home/dietary-profile"><FaAppleAlt size={20} /> Dietary Profile</Link></li>
                <li><Link to="/home/healthy-tips"><FaHeartbeat size={20} /> Healthy Tips</Link></li>
                <li><Link to="/home/scan-history"><FaHistory size={20} /> Scan History</Link></li>
                <li><Link to="/home/favorites"><FaStar size={20} /> Favorites</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
