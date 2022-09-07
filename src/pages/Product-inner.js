import React from "react";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
const ProductInner = () => {
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h2>Sit mauris nibh in sit quam ac dui.</h2>
              <p>Lorem Ipsum, Dolor Sit</p>
              <div className="rating"></div>
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
            <div col-md-4></div>
            <div col-md-8>
              <ul>
                <li>
                  <button type="button" class="btn btn-secondary">
                    buy now
                  </button>
                </li>
                <li>
                  <button type="button" class="btn btn-secondary">
                    add to cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StaticPage>
  );
};
export default ProductInner;
