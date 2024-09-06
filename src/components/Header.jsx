import '../styles/header.css'
import Dropdown from './Dropdown'
import Worldicon from './Worldicon'

function Header(props) {
    return (
        <header id="header">
            {props.title}
            <div className='lang-menu'>
                <Worldicon />
                <Dropdown />
            </div>
        </header>
    )
}

export default Header