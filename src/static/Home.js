let Home = () => {

    const homeLinks = [{name: 'HR Portal', url: 'https://bellevie.hrpartner.io/portal/employee/login',}, {name: 'Rota', url: '',}, {name: 'Agreed Shifts', url: '',}, {name: 'Birdie', url: '',}, {name: 'Confirmation Practices', url: '/confirmation-practices',}, {name: 'Agreed Shifts', url: '',}];
    
    return (
        <div className="section">
            <div className="content">
                {homeLinks.map((link, i) => {return(<a className="tile" key={i} href={link.url}>{link.name}</a> )})}
            </div>
        </div>
    )
}

export default Home;