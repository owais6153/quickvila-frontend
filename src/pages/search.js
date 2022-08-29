import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
const Search = () => {
  const term = useParams().term;

  const [stores, setStores] = useState();
  const [products, setProducts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setProducts();
        const responseData = await sendRequest(
          apiUrl(`products?search=${term}`)
        );
        setProducts(responseData.products);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, term]);

  return (
    <section>
      <Container>
        <h3>You have searched for: {term}</h3>
        {products &&
          products.map((product) => {
            return <li key={product.id}>{product.name}</li>;
          })}
        {!products && !isLoading && <p>No Products to show</p>}
      </Container>
    </section>
  );
};
export default Search;
