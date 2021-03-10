let Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return(
        <footer>
            <div className="content">
                <div className="left">
                    <h3>BelleVie Care</h3>
                    <p>United Kingdom</p>
                    <p>&#169; BelleVie Care {year}</p>
                    <p><a href="https://belleviecare.co.uk/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a target="_blank" href="https://belleviecare.co.uk/cookie-policy-uk" rel="noreferrer">Cookie Policy</a></p>
                </div>
                <div className="right">
                    <a className="social" href="https://www.facebook.com/BellevieCareUK/" title="Facebook" target="_blank" rel="noreferrer" ><img src="./icons/facebook.svg" height="24px" width="24px" alt="facebook logo" /></a>
                    <a className="social" href="https://twitter.com/Bellevie_care/" title="Twitter" target="_blank" rel="noreferrer"><img src="./icons/twitter.svg" height="24px" width="24px" alt="twitter logo" /></a>
                    <a className="social" href="https://www.instagram.com/belleviecare/" title="Instagram" target="_blank" rel="noreferrer"><img src="./icons/instagram.svg" height="24px" width="24px" alt="instagram logo" /></a>
                    <a className="social" href="https://www.linkedin.com/company/bellevie/" title="LinkedIn" target="_blank" rel="noreferrer"><img src="./icons/linkedin.svg" height="24px" width="24px" alt="linkedin logo" /></a>
                </div>
            </div>
            
            
        </footer>
    )
}

export default Footer;