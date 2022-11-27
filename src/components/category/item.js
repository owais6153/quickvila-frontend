import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <div className="category">
        <img src={category.image} alt={category.name} className="w-100" />
        <div className="ctn-p text-center">
          <h3>{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};
export default CategoryItem;
