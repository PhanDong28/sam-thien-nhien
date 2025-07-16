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
    
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyr9L4rNgibrjjCtoJl9e-CWN5Bguic6Q57cI52rqSWcuNsZcKykrZFT4x6cJXroCONtQ/exec';
    
    const data = {
      email: email.trim(),
      timestamp: new Date().toISOString(),
      source: 'Newsletter signup'
    };
    
    console.log('Sending data:', data);
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors',
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);
      
      // Kiểm tra response status
      if (!response.ok) {
        console.error('HTTP error:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Lấy response text trước để debug
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      // Thử parse JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.error('Response text:', responseText);
        throw new Error('Invalid JSON response from server');
      }
      
      console.log('Parsed result:', result);
      
      // Xử lý kết quả
      if (result.success) {
        setMessage('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận tin.');
        setEmail('');
      } else {
        setMessage('Lỗi: ' + (result.error || 'Không thể đăng ký'));
      }
      
    } catch (error) {
      console.error('Fetch error:', error);
      
      // Thử GET fallback
      try {
        console.log('Trying GET fallback...');
        const params = new URLSearchParams({
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: 'Newsletter signup (GET)'
        });
        
        const getResponse = await fetch(`${SCRIPT_URL}?${params}`, {
          method: 'GET',
          mode: 'cors',
        });
        
        console.log('GET response status:', getResponse.status);
        
        if (getResponse.ok) {
          const getResponseText = await getResponse.text();
          console.log('GET raw response:', getResponseText);
          
          try {
            const getResult = JSON.parse(getResponseText);
            console.log('GET parsed result:', getResult);
            
            if (getResult.success) {
              setMessage('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận tin.');
              setEmail('');
            } else {
              setMessage('Lỗi: ' + (getResult.error || 'Không thể đăng ký'));
            }
          } catch (getParseError) {
            console.error('GET JSON parse error:', getParseError);
            setMessage('Đăng ký có thể đã thành công, vui lòng kiểm tra lại.');
          }
        } else {
          throw new Error('GET request failed');
        }
        
      } catch (fallbackError) {
        console.error('GET fallback error:', fallbackError);
        setMessage('Đăng ký có thể đã thành công, vui lòng kiểm tra lại hoặc liên hệ support.');
      }
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
            message.includes('thành công') 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;