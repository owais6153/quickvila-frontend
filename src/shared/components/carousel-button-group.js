import Icon from "../../shared/components/font-awesome-icon";
const CarouselButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="btn-crousel-group">
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><Icon icon="fa fa-chevron-left" /></button>
      <button onClick={() => next()}><Icon icon="fa fa-chevron-right" /></button>
    </div>
  );
}
export default CarouselButtonGroup;