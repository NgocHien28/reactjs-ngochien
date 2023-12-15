import React from "react";
import "../../css/Product.css";
import ProductItem from "./ProductItem";
import { ProductList } from "../../data";

export default function Product() {
    return (
        <div className="product-list">
            {ProductList.map((item, index) => {
                return <ProductItem key={index} name={item.name} price={item.price || "Default price"} image={item.image} />; //trong trường hợp không có giá thì trả về giá trị mặc định || là hoặc
            })}
        </div>
    );
}
