import { homeUrl } from "../../shared/helper";

const Videos = (props) => {
  return (
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
  );
};
export default Videos;
