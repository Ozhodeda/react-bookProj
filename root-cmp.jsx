const { useState } = React

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
//import { BookIndex } from './pages/BookIndex.jsx'

export function App() {
    const [page, setPage] = useState('book')

    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>React Book App</h1>
                <nav className="app-nav">
                    <a onClick={() => setPage('home')} href="#">Home</a>
                    <a onClick={() => setPage('about')} href="#">About</a>
                    {/* <a onClick={() => setPage('book')} href="#">Books</a> */}
                </nav>
            </header>
            <main>
                {page === 'home' && < HomePage />}
                {page === 'about' && <AboutUs />}
                {/* {page === 'book' && <BookIndex />} */}
            </main>

        </section>
    )
}