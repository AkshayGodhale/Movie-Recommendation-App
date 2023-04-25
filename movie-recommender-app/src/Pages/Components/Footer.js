// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/manish-thakare-90681a22b/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/AkshayGodhale/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://instagram.com/manish_thakare_12/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    © Developed By Manish Thakare
                </div>
            </div>
        </footer>
    );
};

export default Footer;
