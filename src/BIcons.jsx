import HomeIconic from "./icons/home.svg"
import FootballIconic from "./icons/football.svg"
import PlayerIconic from "./icons/player.svg"
import TableIconic from "./icons/table.svg"
import PlusIconic from "./icons/plus.svg"
import './icons.css'

export const HomeIcon = () => {
    return (
        <img className="icon" src={HomeIconic} alt="Home"/>
    )
}

export const FootballIcon = () => {
    return (
        <img className="icon" src={FootballIconic} alt="Football"/>
    )
}

export const PlayerIcon = () => {
    return (
        <img className="icon" src={PlayerIconic} alt="Player"/>
    )
}

export const TableIcon = () => {
    return (
        <img className="icon" src={TableIconic} alt="Table"/>
    )
}

export const PlusIcon = () => {
    return (
        <img className="icon" src={PlusIconic} alt="Plus"/>
    )
}