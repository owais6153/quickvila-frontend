import Input from "../../shared/components/form-elements/input";
import Button from "../../shared/components/form-elements/button";
import Icon from "../../shared/components/font-awesome-icon";
import { useForm } from "../../shared/hooks/form-hook";
import { useContext } from "react";
import { AppContext } from "../../shared/context/app-context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./search-form.css";
const SearchForm = (props) => {
  const term = useParams().term;

  const [formState, inputHandler, setFormData] = useForm(
    {
      search: {
        value: term,
        isValid: true,
      },
    },
    false
  );

  useEffect(() => {
    console.log(term);
  }, [term]);

  const app = useContext(AppContext);
  const submitHandler = (e) => {
    e.preventDefault();
    app.searchHandler(formState.inputs.search.value);
  };
  return (
    <form id="searchForm" onSubmit={submitHandler}>
      {term}
      <Input
        initialValue={term}
        initialValid={true}
        type="search"
        id="search"
        name="search"
        placeholder="Search Item..."
        onInput={inputHandler}
        validaters={[]}
      />
      <Button className="btn btn-primary" text="Search">
        <Icon icon="fa fa-search" />
      </Button>
    </form>
  );
};
export default SearchForm;
