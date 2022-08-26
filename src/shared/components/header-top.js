import Container from "./container";

const HeaderTop = () => {
    return (
        <div className="header_top">                            
            <Container fluid>
                <div className="top_nav_container">
                    <div className="contact_nav">
                    <a href="http://localhost:3000/">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>
                        Call : +01 123455678990
                        </span>
                    </a>
                    <a href="http://localhost:3000/">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                        Email : demo@gmail.com
                        </span>
                    </a>
                </div>
                <from className="search_form">
                    <input type="text" className="form-control" placeholder="Search here..."/>
                    <button className="" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </from>
                <div className="user_option_box">
                    <a href="http://localhost:3000/" className="account-link">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>
                        My Account
                        </span>
                    </a>
                    <a href="http://localhost:3000/" className="cart-link">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>
                        Cart
                        </span>
                    </a>
                </div>
            </div>            
        </Container>
    </div>
    )
}
export default HeaderTop;