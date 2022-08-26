import Container from "./container";

const HeaderBottom = () => {
    return (
        <div className="header_bottom">
            <Container fluid>
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                    <span>
                        Minics
                    </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="about.html"> About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="why.html">Why Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="testimonial.html">Testimonial</a>
                        </li>
                    </ul>
                    </div>
                </nav>
        </Container>
    </div>
    );
}

export default HeaderBottom;