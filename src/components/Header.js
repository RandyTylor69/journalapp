import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <FontAwesomeIcon icon={faBookAtlas} size = "2x" />
            <h1>my travel journal.</h1>
        </header>
    );
}