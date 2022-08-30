import { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import Banner from "../components/sections/banner";
import { homeUrl } from "../shared/helper";
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
                  <div className="col-md-3">
                    <div className="prd-cBox">
                      <div className="wishlist-icon">
                        <img src={homeUrl("images/Vector.png")} />
                      </div>
                      <div className="figure">
                        <img
                          src={`http://localhost/trikaro/public/${product.image}`}
                        />
                      </div>
                      <div className="ctn-p">
                        <h3>{product.name}</h3>
                        <div className="innerctn">
                          <h4>$70.00</h4>
                          <h5>$95.00</h5>
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
                  <img src={homeUrl("images/Ellipse 5.png")} />
                  <div className="T-fig-ctn">
                    <h3>Mike Taylor</h3>
                    <h5></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StaticPage>
  );
};
export default Home;
