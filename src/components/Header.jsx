import '../styles/header.css'

function Header(props) {
    return (
        <header id="header">
            {props.title}
        </header>
    )
}

export default Header