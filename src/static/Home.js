import Helmet from 'react-helmet';

const Home = () => {
    const services = ['Confirmation Practices', 'HR Partner', 'Google Docs', 'Rota', 'Agreed Shifts', 'Annual Leave', 'Birdie'];
    return (
        <>
            <Helmet>
                <title>BelleVie Care Team Hub</title>
            </Helmet>
            <div className="section offwhitebg">
                <div className="content">
                    {services.map((service, i) => {
                        return (
                            <a className="tile" href="https://google.com" target="_blank" rel="noreferrer">{service}</a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;