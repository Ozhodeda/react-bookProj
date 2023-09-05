
const { Outlet, Link } = ReactRouterDOM
export function AboutUs(){
    return(
        <section className="about">
            <h1>About books and us..</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.</p>

            <nav>
                <Link to="/about/team">Team</Link>
                <Link to="/about/goal">Goal</Link>
            </nav>

            <section>
                <Outlet />
            </section>
        </section>
    )
}