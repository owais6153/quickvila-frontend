import StoreBannerItem from "../storebanner/item";
const AdvBanners = ({ banners }) => {
  return (
    <section className="homeSec-four">
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <StoreBannerItem key={banner.id} banner={banner} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AdvBanners;
