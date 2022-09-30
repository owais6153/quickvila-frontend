import { useState } from "react";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import { homeUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import ProductSlider from "../components/sections/product-slider";
import "./Product-inner.css";
const ProductInner = () => {
  const [products, setProducts] = useState();





    const { sendRequest } = useHttpClient();

  const [stores, setStores] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
    const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("home"));
        if (responseData.status == 200) {
          setProducts(responseData.products);
        }
      } catch (err) {}
    };
    fetchData();
  };
  return (
     <StaticPage onPageLoad={onPageLoad} getData={getData}>
      <section className="product-inner-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4"><img src={homeUrl("images/Rectangle16.png")} /></div>
            <div className="col-md-8">
              <h2>Sit mauris nibh in sit quam ac dui.</h2>
              <p>Lorem Ipsum, Dolor Sit</p>
              <div className="rating">
              <ul>
              <li><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></li>
              <li><p>12Ratings</p></li>
              <li><p>4.1 average</p></li>
              <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i>Add To WishList</a></li>
              </ul>
              </div>
              <h2>$77.91</h2>
              <h3>Description:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                augue consectetur pellentesque nec tincidunt senectus. Egestas
                praesent accumsan vitae ultrices dictum ac quis. A in fermentum
                nisi elementum consectetur fames mi. Sit commodo elit eupi massa
                est. Eu ut leo duis sit arcu mi sed augue volutpat. Egestas amet
                urna, suscipit cras tincidunt arcu lectus hac nullam. Adipiscing
                vitae nullam ornare sit libero fuscse id. Eros nec ut tincidunt
                amet. Quis egestas aenean arcu consequat. Nunc sed pellentesque
                feugiat gravida fringilla fringilla natoque eget non. In et
                semper consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"><div className="rating-inner">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <ul>
            <li><img src={homeUrl("images/luusa.png")} /></li>
            <li><img src={homeUrl("images/luusa.png")} /></li>
            <li><img src={homeUrl("images/luusa.png")} /></li>
            </ul>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            </div>
            <div className="col-md-8">
              <ul>
                <li>
                  <button type="button" className="btn btn-secondary">
                    buy now
                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-secondary">
                    add to cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 {products  && products.length > 0  && (
        <ProductSlider
          products={products}
          title="Related products "
          url="/products"
        />
      )}
    </StaticPage>
  );
};
export default ProductInner;
