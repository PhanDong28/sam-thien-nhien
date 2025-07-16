import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Vui lòng nhập email hợp lệ');
      return;
    }
    
    setIsLoading(true);
    setMessage('');
    
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrbMWAkehtSZ0sbo4WdmJXCU9k0M1Yj4FVhuYQlf6sOBqOdTcU_z-qmCmsGy4pelA-Sg/exec';
    
    try {
      const getUrl = `${SCRIPT_URL}?email=${encodeURIComponent(email)}&timestamp=${new Date().toISOString()}&source=Newsletter`;
      
      const response = await fetch(getUrl);
      const result = await response.json();
      
      if (result.success) {
        setMessage('✅ Đăng ký thành công!');
        setEmail('');
      } else {
        setMessage(`❌ ${result.error || 'Lỗi không xác định'}`);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setMessage('⚠️ Đăng ký có thể đã thành công, vui lòng kiểm tra lại');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="newsletter bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="newsletter-content max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Đăng Ký Nhận Tin</h2>
        <p className="text-gray-600 mb-8">
          Nhận thông tin mới nhất về sản phẩm và ưu đãi đặc biệt từ Sâm Thiên Nhiên!
        </p>
        
        <form onSubmit={handleSubmit} className="newsletter-form flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
          <input 
            type="email" 
            className="newsletter-input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Nhập email của bạn" 
            required 
            aria-label="Email để đăng ký nhận tin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="newsletter-button px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Đăng ký nhận tin"
            disabled={isLoading || !email}
          >
            {isLoading ? 'Đang gửi...' : 'Đăng ký'}
          </button>
        </form>

        {message && (
          <div className={`p-4 rounded-lg ${
            message.includes('✅') 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : message.includes('❌')
                ? 'bg-red-100 text-red-700 border border-red-200'
                : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
          }`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;