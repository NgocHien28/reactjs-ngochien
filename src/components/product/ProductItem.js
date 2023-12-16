// import React from "react";

// export default function ProductItem(props) {
//     return (
//         <div className="product-item">
//             <div className="image">
//                 <img src={props.image} alt={props.name}></img>
//             </div>

//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.price}</p>
//             </div>
//         </div>
//     );
// }
import React from "react";

export default function ProductItem(props) {
    return (
        <div className="product-item">
            <div className="saletag">{props.sale}</div>
            <div className="image">
                <img src={props.image} alt={props.name}></img>
            </div>
            <h2 className="product-name">{props.name}</h2>
            <div className="price">
                <span className="price-old">{props.priceold}</span>
                <span className="price-new">{props.pricenew}</span>
            </div>
            <div className="color-group">
                <span>
                    <img src={props.color1}></img>
                </span>
                <span>
                    <img src={props.color2}></img>
                </span>
            </div>
        </div>
    );
}
