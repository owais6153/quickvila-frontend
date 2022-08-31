import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cart-hook";
import ModalPopup from "../components/modal";
import LoginForm from "../../auth/login";
export const AppContext = createContext({
  auth: {
    _token: "",
    _user: {},
  },
  isLogin: false,
  toggleLoginModal: () => {},
  searchHandler: () => {},
  cart: {},
  addToCart: () => {},
});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate(`/search/${value}`);
  };
  const [cart, addToCart] = useCart();

  const [loginModal, setLoginModal] = useState(false); 
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  }

  return (
    <AppContext.Provider
      value={{
        isLogin: false,
        toggleLoginModal,
        auth: {
          _token: "",
          _user: {},
        },
        searchHandler,
        cart,
        addToCart,
      }}
    >
      {children}
      <ModalPopup size="md" title="Login" show={loginModal} onHide={toggleLoginModal}>
        <LoginForm />
      </ModalPopup>
    </AppContext.Provider>
  );
};
