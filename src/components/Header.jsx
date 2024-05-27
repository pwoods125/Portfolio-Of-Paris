import bwphoto from '../assets/images/PWoods B&W.png'
export default function Header() {
    return (
        <header className="header">
            <h1>Welcome to Paris!</h1>
            <img src={bwphoto} alt='PWoods B&W.png'></img>
        </header>
    )
}
