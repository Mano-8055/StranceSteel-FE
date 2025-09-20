import React from 'react';
import ProductCard from './ProductCard';
import "./style.css";

const dummyProducts = [
    {
        id: 1,
        image: 'https://via.placeholder.com/100x100.png?text=JSW+HR+Sheet',
        name: 'JSW, HR, Sheet, IS2062 E250A',
        specs: { thickness: '4 mm', width: '1250 mm', length: '2500 mm' },
        sellerId: 'HTS-S144',
        stock: '10.000 MT',
        location: 'Bengaluru',
        deliveryFee: '₹550/MT',
        price: '₹52,000/MT'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/100x100.png?text=JSW+HR+Sheet',
        name: 'JSW, HR, Sheet, IS2062 E350A',
        specs: { thickness: '2 mm', width: '1250 mm', length: '2500 mm' },
        sellerId: 'HTS-S144',
        stock: '10.000 MT',
        location: 'Bengaluru',
        deliveryFee: '₹550/MT',
        price: '₹52,500/MT'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/100x100.png?text=JSW+HR+Sheet',
        name: 'JSW, HR, Sheet, IS2062 E250A',
        specs: { thickness: '20 mm', width: '1250 mm', length: '6300 mm' },
        sellerId: 'HTS-S144',
        stock: '10.000 MT',
        location: 'Bengaluru',
        deliveryFee: '₹550/MT',
        price: '₹52,750/MT'
    }
];
const filterSections = ['Product', 'Form', 'Grade', 'Thickness', 'Width', 'Length', 'Brands'];

const ProductList = () => {
    return (
        <main className="product-list-container">
            <aside className="filter-sidebar">
                <div className="filter-header">
                    <h3><span className="icon">≡</span> Filters</h3>
                    <span className="clear-all">Clear All</span>
                </div>
                {filterSections.map((section, index) => (
                    <div key={index} className="filter-section">
                        <div className="section-title">
                            <span>{section}</span>
                            <span className="toggle">^</span>
                        </div>
                    </div>
                ))}
                <div className="filter-section quantity-section">
                    <div className="section-title">
                        <span>Quantity (MT)</span>
                        <span className="toggle">^</span>
                    </div>
                    <div className="quantity-input">
                        <button>-</button>
                        <input type="number" defaultValue="1.000" step="0.001" />
                        <button>+</button>
                    </div>
                </div>
            </aside>
            <div className='prod'>
                <div className="sort-options">
                    Sort by: <select>
                        <option>Delivery Location: Low to high</option>
                    </select>
                </div>
                <div className="product-cards">
                    {dummyProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </main>
    );
};

export default ProductList;