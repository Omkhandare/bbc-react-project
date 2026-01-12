import './Products.css';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';

function Products() {
  return (
    <section className="products-section">
      <h2>Our Products for Livestock Breeding</h2>

      <div className="products-row">

        <div className="product-card">
          <div className="product-img">
            <img src={p1} alt="Female Male Calves" />
          </div>
          <h3>Female/Male Calves Available</h3>
          <div className="arrow-btn">➜</div>
        </div>

        <div className="product-card">
          <div className="product-img">
            <img src={p2} alt="Pregnant Heifer" />
          </div>
          <h3>Pregnant Heifer</h3>
          <div className="arrow-btn">➜</div>
        </div>

        <div className="product-card">
          <div className="product-img">
            <img src={p3} alt="Embryos Transfer" />
          </div>
          <h3>Top-Quality Embryos for Transfer</h3>
          <div className="arrow-btn">➜</div>
        </div>

        <div className="product-card">
          <div className="product-img">
            <img src={p4} alt="Customized Plans" />
          </div>
          <h3>Customized Breeding Plans</h3>
          <div className="arrow-btn">➜</div>
        </div>

      </div>
    </section>
  );
}

export default Products;
