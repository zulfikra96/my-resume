import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container text-center">
                        <a className="cc-facebook btn btn-link" href="https://web.facebook.com/zul.lahmudin/">
                            <i className="fa fa-facebook fa-2x " aria-hidden="true">
                            </i>
                        </a>
                        <a className="cc-github btn btn-link " href="https://github.com/zulfikra96">
                            <i className="fa fa-github fa-2x " aria-hidden="true">
                            </i>
                            </a>
                        <a className="cc-instagram btn btn-link" href="https://www.instagram.com/iamzulfikra.lahmudin/">
                            <i className="fa fa-instagram fa-2x " aria-hidden="true">
                            </i>
                        </a>
                </div>
                <div className="h4 title text-center">Zulfikra L Abdjul</div>
                    <div className="text-center text-muted">
                            <p>&copy; Creative CV. All rights reserved.<br/>Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
                    </div>
            </footer>
        </Fragment>
    );
}

export default Footer;