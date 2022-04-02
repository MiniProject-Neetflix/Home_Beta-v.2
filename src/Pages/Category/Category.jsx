import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DummyImages from "../../Components/Assets/images.jpg";
import Footer from "../../Components/Footer/Footer";
import "./Category.scss";
import { AiOutlineRight } from "react-icons/ai";

const Category = (props) => {
  return (
    <div>
      <Navbar />
      <div className="all-category-container">
        <div className="all-category-history">
          <p>Home</p>
          <p>
            <AiOutlineRight className="icon-right" />
            Category
          </p>
          <p>
            <AiOutlineRight className="icon-right" />
            {props.category || "Nama Kategori"}
          </p>
        </div>
        <div className="all-category">
          <p className="all-category-title">{props.title || "Category"}</p>
          <div className="all-category-film">
            <img src={DummyImages} alt="" width={"140px"} height={"220px"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
