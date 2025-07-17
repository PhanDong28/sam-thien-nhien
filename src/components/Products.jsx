import React, { useEffect } from 'react';
import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg'; 
import pro3 from '../assets/images/pro3.jpg'; 
import pro4 from '../assets/images/pro4.jpg';  


const Products = () => {
  const products = [
    {
      name: 'Sâm Tươi Nguyên Củ',
      price: '500.000 VNĐ/kg',
      description: 'Sâm tươi được thu hoạch từ trang trại tự nhiên, giữ nguyên dưỡng chất và hương vị đặc trưng.',
      image: pro4,
    },
    {
      name: 'Sâm Khô Thượng Hạng',
      price: '1.200.000 VNĐ/hộp',
      description: 'Sâm khô được chế biến tỉ mỉ, bảo toàn tối đa dược tính, tiện lợi sử dụng hàng ngày.',
      image: pro2,
    },
    {
      name: 'Trà Sâm Tự Nhiên',
      price: '250.000 VNĐ/hộp',
      description: 'Trà sâm thơm ngon, hỗ trợ thư giãn và tăng cường sức khỏe, phù hợp mọi lứa tuổi.',
      image: pro3,
    },
  ];

  // Add IntersectionObserver for fade-in animation
  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeIns.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  console.log('Products component rendered'); // Debug

  return (
    <section id="product" className="product-showcase">
      <div className="container">
        <h2 className="section-title fade-in">Sản Phẩm Sâm Thiên Nhiên</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card fade-in" key={index}>
              <div className="product-image">
                {product.image ? (
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  product.name // Fallback to text if no image
                )}
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price">{product.price}</div>
                <p className="product-description">{product.description}</p>
                <button className="product-button" aria-label={`Thêm ${product.name} vào giỏ hàng`}>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;