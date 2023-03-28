import React from "react";
import CardForm from "./CardForm";

const AddEntry = (p, past, setPast) => {
  setPast([p, ...past]);
};

export default AddEntry;
