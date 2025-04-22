import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import S852 from '../../assets/S852.png';
import earpods1 from '../../assets/earpods1.png';
import earpods2 from '../../assets/earpods2.png';


import './ProductList.css';

const headphones = [
  {
    id: 1,
    img: S852,
    title: 'Apple BYZ S852I',
    rate: 4.7,
    price: 2927,
    oldPrice: 3827,
  },
  {
    id: 2,
    img: earpods1,
    title: 'Apple EarPods',
    rate: 4.5,
    price: 2327,
  },
	{
    id: 3,
		img: earpods2,
    title: 'Apple EarPods',
    rate: 4.5,
    price: 2327,
  },
	{
    id: 4,
		img: S852,
    title: 'Apple BYZ S852I',
    rate: 4.7,
    price: 2927,
    oldPrice: 3827,
  },
	{
    id: 5,
		img: earpods1,
    title: 'Apple EarPods',
    rate: 4.5,
    price: 2327,
  },
  {
    id: 6,
		img: earpods2,
    title: 'Apple EarPods',
    rate: 4.5,
    price: 2327,
  },
];

export default headphones;
// function ProductList() {
//   return (
//     <div className="product-list">
//       {headphones.map((product) => (
//         <ProductCard 
//           key={product.id} 
//           product={product}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductList;