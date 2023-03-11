import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h2 className="listHeader">2022 REGAL 36 GRAND COUPE</h2>
      <h5 className="listPrice">$549,900</h5>
      <p className="listLocationn">Knoxvile, tenessee</p>
    </>
  );
};
