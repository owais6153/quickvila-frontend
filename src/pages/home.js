import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import Banner from "../components/sections/banner";
import { homeUrl } from "../shared/helper";
import  AddToCartButton from "../components/product/add-to-cart";

const Home = () => {
  const [products, setProducts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
 

  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("products"));
        setProducts(responseData.products);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage getData={getData}>
      <Banner />
      <section className="home-sec-one">
        <div className="container">
          <div className="row RRone">
            <div className="col-md-6">
              <h3>All Stores</h3>
            </div>
            <div className="col-md-6">
              <a href="#">See All</a>
              <a href="#">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="row RRtwo">
            <div className="col-md-4">
              <div className="c-box">
                <div className="brand">
                  <a>
                    <img src={homeUrl("images/Ellipse 5.png")} />
                  </a>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn">
                  <p>
                    20K
                    <br />
                    <span>followers</span>
                  </p>
                  <p>
                    100+
                    <br /> <span>Products</span>
                  </p>
                </div>
                <h4>
                  <a>chanel</a>
                </h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="c-box">
                <div className="brand">
                  <a>
                    <img src={homeUrl("images/Ellipse 5.png")} />
                  </a>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn">
                  <p>
                    20K
                    <br />
                    <span>followers</span>
                  </p>
                  <p>
                    100+
                    <br /> <span>Products</span>
                  </p>
                </div>
                <h4>
                  <a>chanel</a>
                </h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="c-box">
                <div className="brand">
                  <a>
                    <img src={homeUrl("images/Ellipse 5.png")} />
                  </a>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn">
                  <p>
                    20K
                    <br />
                    <span>followers</span>
                  </p>
                  <p>
                    100+
                    <br /> <span>Products</span>
                  </p>
                </div>
                <h4>
                  <a>chanel</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sec-two">
        <div className="container">
          <div className="row RRone">
            <div className="col-md-6">
              <h3>All Products</h3>
            </div>
            <div className="col-md-6">
              <a href="#">See All</a>
              <a href="#">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="row twoS-two">
            {products &&
              products.map((product) => {
                return (
                  <div key={product.id} className="col-md-3">
                    <div className="prd-cBox">
                      <div className="wishlist-icon">
                        <img src={homeUrl("images/Vector.png")} />
                      </div>
                      <div className="figure">
                        <img
                          src={`${product.image}`}
                        />
                      </div>
                      <div className="ctn-p">
                        <h3>{product.name}</h3>
                        <div className="innerctn">
                          <h4>{product.price}</h4>
                          {product.sale_price && <h5>$95.00</h5>}
                                     <AddToCartButton product={product}/>              
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="home-sec-three">
        <div className="container">
          <div className="row RRone">
            <div className="col-md-6">
              <h3>Featured products</h3>
            </div>
            <div className="col-md-6">
              <a href="#">See All</a>
              <a href="#">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="row twoS-two">
            <div className="col-md-3">
              <div className="prd-cBox">
                <div className="wishlist-icon">
                  <img src={homeUrl("images/Vector.png")} />
                </div>
                <div className="tag-f">
                  <p>featured</p>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn-p">
                  <h3>Ultrices habitasse</h3>
                  <div className="innerctn">
                    <h4>$70.00</h4>
                    <h5>$95.00</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="prd-cBox">
                <div className="wishlist-icon">
                  <img src={homeUrl("images/Vector.png")} />
                </div>
                <div className="tag-f">
                  <p>featured</p>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn-p">
                  <h3>Ultrices habitasse</h3>
                  <div className="innerctn">
                    <h4>$70.00</h4>
                    <h5>$95.00</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="prd-cBox">
                <div className="wishlist-icon">
                  <img src={homeUrl("images/Vector.png")} />
                </div>
                <div className="tag-f">
                  <p>featured</p>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn-p">
                  <h3>Ultrices habitasse</h3>
                  <div className="innerctn">
                    <h4>$70.00</h4>
                    <h5>$95.00</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="prd-cBox">
                <div className="wishlist-icon">
                  <img src={homeUrl("images/Vector.png")} />
                </div>
                <div className="tag-f">
                  <p>featured</p>
                </div>
                <div className="figure">
                  <img src={homeUrl("images/Card 1.png")} />
                </div>
                <div className="ctn-p">
                  <h3>Ultrices habitasse</h3>
                  <div className="innerctn">
                    <h4>$70.00</h4>
                    <h5>$95.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeSec-four">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="coldiv"
                style={{
                  backgroundImage: `url('${homeUrl(
                    "images/Discount offer.png"
                  )}')`,
                }}
              >
                <p>Flat 20% Discount</p>
                <h3>
                  Stylish Women
                  <br />
                  Bags
                </h3>
                <a href="#">shop now</a>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="coldiv"
                style={{
                  backgroundImage: `url('${homeUrl(
                    "images/Discount offer.png"
                  )}')`,
                }}
              >
                <p>Flat 20% Discount</p>
                <h3>
                  Stylish Women
                  <br />
                  Bags
                </h3>
                <a href="#">shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-Sec-five">
        <div className="container">
          <div className="row RRone">
            <div className="col-md-6">
              <h3>Testimonials</h3>
            </div>
            <div className="col-md-6">
              <a href="#">See All</a>
              <a href="#">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  libero cras quis eu pretium tincidunt. Odio eget felis morbi
                  tristique auctor porttitor orci tempor gravida pellentesque.
                  Egestas nunc tempor gravida velit.”
                </p>
                <div className="testimonial-figure">
                  <img src={homeUrl("images/Image.png")} />
                  <div className="T-fig-ctn">
                    <h4>Mike Taylor</h4>
                    <h5>Lorem ipsum dolor</h5>
                    <img src={homeUrl("images/Vector (1).png")} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  libero cras quis eu pretium tincidunt. Odio eget felis morbi
                  tristique auctor porttitor orci tempor gravida pellentesque.
                  Egestas nunc tempor gravida velit.”
                </p>
                <div className="testimonial-figure">
                  <img src={homeUrl("images/Image.png")} />
                  <div className="T-fig-ctn">
                    <h4>Mike Taylor</h4>
                    <h5>Lorem ipsum dolor</h5>
                    <img src={homeUrl("images/Vector (1).png")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homesec-six">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="vid-box">
                <img src={homeUrl("images/Rectangle 10.png")} />
                <div className="vid-butn">
                  <img src={homeUrl("images/Group 16.png")} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vid-box">
                <img src={homeUrl("images/Rectangle 10.png")} />
                <div className="vid-butn">
                  <img src={homeUrl("images/Group 16.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-fluid">
          <div className="row foot-Rone">
            <div className="col-md-4">
              <img src={homeUrl("images/Trikro-White 1.png")} />
            </div>
            <div className="col-md-4">
              <ul className="ul-N">
                <li>Returns</li>
                <li>Privacy</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="ul-Sicons">
                <li>
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-youtube-square" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-pinterest-square" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3>
                  <img src={homeUrl("images/Vecto.png")} />
                  Signup For Newsletter
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus integer fusce turpis vel tortor ornare.
                </p>
              </div>
              <div className="col-md-2">
                <h3>About Us</h3>
                <ul>
                  <li>our story</li>
                  <li>our team</li>
                  <li>blogs</li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>help</h3>
                <ul>
                  <li>FAQs</li>
                  <li>feadback</li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>privacy</h3>
                <ul>
                  <li>term of use</li>
                  <li>privacy and security</li>
                </ul>
              </div>
              <div className="col-md-3 last">
                <h3>gallery</h3>
                <div className="footer-gallery">
                  <img src={homeUrl("images/Rectangle 24.png")} />
                  <img src={homeUrl("images/Rectangle 25.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StaticPage>
  );
};
export default Home;
