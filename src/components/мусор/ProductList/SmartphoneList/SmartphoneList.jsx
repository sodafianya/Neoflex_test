import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import earpods3 from '../../assets/earpods3.png';
import GH04 from '../../assets/GH04.png';
import BO4 from '../../assets/BO4.png';
import './SmartphoneList.css';

const smartphones = [
  {
    id: 11,
    img: earpods3,
    title: 'Apple EarPods',
    rate: 4.7,
    price: 9527,
  },
  {
    id: 12,
    img: GH04,
    title: 'GERLAX GH-04',
    rate: 4.7,
    price: 6527,
  },
  {
    id: 13,
    img: BO4,
    title: 'BOROFONE BO4',
    rate: 4.7,
    price: 7527,
  }
];

export default smartphones;

// const SmartphoneList = () => {


//   return (
//     <section className="smartphone-list-container">
//       <h2 className="smartphone-list-title"></h2>
//       <div className="smartphone-list">
//         {smartphones.map((product) => (
//           <ProductCard 
//             key={product.id}
//             product={product}
//             className="smartphone-card"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SmartphoneList;