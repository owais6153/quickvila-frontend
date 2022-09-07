import Icon from "./font-awesome-icon";
import "./pagination.css";
const Pagination = ({ links, onPageChange }) => {
  function isInt(value) {
    var x;
    return isNaN(value) ? !1 : ((x = parseFloat(value)), (0 | x) === x);
  }
  const getPageLink = (page, active, url, index) => {
    var elem;
    if (active) {
      elem = <span className="page-link active">{page}</span>;
    } else if (!active && !url) {
      elem = (
        <span className={`page-link ${index === 0 ? "prev" : "next"}`}>
          {index === 0 ? (
            <Icon icon="fa fa-chevron-left" />
          ) : (
            <Icon icon="fa fa-chevron-right" />
          )}
        </span>
      );
    } else if (isInt(page)) {
      elem = (
        <a className="page-link" data-page={page} onClick={onPageChange}>
          {page}
        </a>
      );
    } else {
      let label = index == 0 ? "prev" : "next";
      elem = (
        <a
          className={`page-link ${index === 0 ? "prev" : "next"}`}
          data-page={label}
          onClick={onPageChange}
        >
          {label === "prev" ? (
            <Icon icon="fa fa-chevron-left" />
          ) : (
            <Icon icon="fa fa-chevron-right" />
          )}
        </a>
      );
    }

    return elem;
  };
  return (
    <nav aria-label="Store navigation">
      {links && (
        <ul className="pagination justify-content-center">
          {links.map((link, index) => {
            return (
              <li className="page-item" key={index}>
                {getPageLink(link.label, link.active, link.url, index)}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
export default Pagination;
