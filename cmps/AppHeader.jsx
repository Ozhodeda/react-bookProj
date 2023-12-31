const {  NavLink } = ReactRouterDOM
import { UserMsg } from "./UserMsg.jsx"

export function AppHeader() {
    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Book App</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/book" >Books</NavLink>
                </nav>
            </section>
            <UserMsg/>
        </header>
    )
}