import { useState, useEffect } from "react";
import "./advertisement_block.scss";
import msi from "../../media/msi.png";

const Advertisement_block = () => {
  return (
    <div className="Advertisement">
      <div className="Advertisement_block">
        <img src={msi} alt="" />
      </div>
    </div>
  );
};

export default Advertisement_block;
