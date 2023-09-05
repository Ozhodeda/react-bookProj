
const { Outlet, Link } = ReactRouterDOM
export function AboutUs(){
    return(
        <section className="about">
            <h1>About books and us..</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.</p>

            <nav>
                <Link  to="/about/team"><h2>Team</h2></Link>
                <Link to="/about/goal"><h2>Goal</h2></Link>
            </nav>

            <section>
                <Outlet />
            </section>
        </section>
    )
}