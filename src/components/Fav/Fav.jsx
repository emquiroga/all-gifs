import Login from "components/Login/Login";
import Modal from "components/Modal/Modal";
import { useUser } from "hooks/useUser";
import React, { useState } from "react";
import { FavCheck, FavSpan } from "./style";

const Fav = ({ id }) => {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFav = favs.some((favId) => favId === id);

  const handleFav = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFav
    ? ["Remove from favorites", "❌"]
    : ["Add to favorites", "❤️"];

  return (
    <>
      <FavCheck onClick={handleFav}>
        <FavSpan role="img" aria-label={label}>
          {emoji}
        </FavSpan>
      </FavCheck>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
};

export default Fav;
