import './AppBar.css';
import {FootballIcon, HomeIcon, PlayerIcon, TableIcon} from "../BIcons.jsx";

export const AppBar = () => {
    return (
        <div className="ContainerAppBar">
            <div className="AppBarItem">
                <div className="icn"><HomeIcon/></div>
                <div className="tabName">Uy</div>
            </div>
            <div className="AppBarItem">
                <div className="icn"><FootballIcon/></div>
                <div className="tabName">Ligalar</div>
            </div>
            <div className="AppBarItem">
                <div className="icn"><PlayerIcon/></div>
                <div className="tabName">O'yinchilar</div>
            </div>
            <div className="AppBarItem">
                <div className="icn"><TableIcon/></div>
                <div className="tabName">Jadval</div>
            </div>
        </div>
    );
};