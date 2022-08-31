import { homeUrl } from "../../shared/helper";
const AdvBanners = (props) => {
  return (
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
  );
};
export default AdvBanners;
