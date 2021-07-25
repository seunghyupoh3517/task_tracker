// instead of having <a href = ... > to load the page
// Link can do instantly
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
