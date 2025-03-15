import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
  };

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
    // Reset form or show success message
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-[70px]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .input-field {
          background-color: #f7f7f7;
          border: none;
          padding: 14px 20px;
          border-radius: 6px;
          width: 100%;
          font-size: 16px;
          transition: all 0.2s ease;
        }
        .input-field:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(157, 224, 29, 0.3);
        }
        .submit-button {
          color: #000;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .arrow-icon {
          background-color: #000;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
        }
      `}</style>
      
      <h1 className="text-4xl font-bold mb-8 fade-in">
      Contact Us
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className="input-field"
              required
            />
          </div>
          <div>
            <input 
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              className="input-field"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email *"
              className="input-field"
              required
            />
          </div>
          <div>
            <input 
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="input-field"
              required
            />
          </div>
        </div>
        
        <div>
          <input 
            type="text"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            placeholder="Subject *"
            className="input-field"
            required
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Message *"
            rows="6"
            className="input-field"
            required
          ></textarea>
        </div>
        
        <div className="flex">
          <button type="submit" className="submit-button bg-orange-500">
            Send Message
            <span className="arrow-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3L14 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;