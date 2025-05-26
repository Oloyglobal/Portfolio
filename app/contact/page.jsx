
"use client"

import React, { useState } from 'react';
import Link from 'next/link';


const ContactPage = () => {

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
    urgency: 'normal',
    preferredContact: 'email'
  });
  
  const [formState, setFormState] = useState({
    status: 'idle',
    errors: {},
    aiSuggestion: null,
    submissionTime: null
  });
  
  const [showFAQ, setShowFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [timeEstimate, setTimeEstimate] = useState('24 hours');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
 
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: null }
      }));
    }
    

    if (name === 'message' && value.length > 20) {
      analyzeMessageContent(value);
    }
  
    if (name === 'urgency') {
      const estimates = {
        'critical': '4 hours',
        'high': '12 hours',
        'normal': '24 hours',
        'low': '48 hours'
      };
      setTimeEstimate(estimates[value] || '24 hours');
    }
  };
  
  const analyzeMessageContent = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('billing') || lowerMessage.includes('payment')) {
      setFormState(prev => ({
        ...prev,
        aiSuggestion: {
          category: 'billing',
          message: 'It looks like you have a billing question. We recommend selecting "Billing" as your category for faster routing.'
        }
      }));
    } else if (lowerMessage.includes('technical') || lowerMessage.includes('error') || lowerMessage.includes('bug')) {
      setFormState(prev => ({
        ...prev,
        aiSuggestion: {
          category: 'technical',
          message: 'This appears to be a technical issue. Selecting "Technical Support" as your category will route your request to our tech specialists.'
        }
      }));
    } else {
      setFormState(prev => ({ ...prev, aiSuggestion: null }));
    }
  };
  
  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    
    return errors;
  };
  
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }
    

    setFormState(prev => ({ ...prev, status: 'submitting' }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState({
        status: 'success',
        errors: {},
        aiSuggestion: null,
        submissionTime: new Date().toLocaleString()
      });
      

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general',
        urgency: 'normal',
        preferredContact: 'email'
      });
    }, 1500);
  };
  
  // Reset form after submission
  const resetForm = () => {
    setFormState({
      status: 'idle',
      errors: {},
      aiSuggestion: null,
      submissionTime: null
    });
  };
  
  // FAQ data
  const faqItems = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Response times vary based on the urgency and category of your inquiry. Generally, we aim to respond within 24 hours for standard inquiries, and faster for urgent matters.'
    },
    {
      question: 'What information should I include in my message?',
      answer: 'Please include any relevant details about your issue, such as account information, specific error messages, or screenshots if applicable. The more information you provide, the better we can assist you.'
    },
    {
      question: 'How can I check the status of my inquiry?',
      answer: 'After submitting your inquiry, you will receive a confirmation email with a ticket number. You can use this ticket number to check the status of your inquiry through our support portal.'
    },
    {
      question: 'Can I request a callback instead of email communication?',
      answer: 'Yes! You can select your preferred contact method in the form. If you choose "Phone," please ensure your phone number is correctly entered in your profile, and our team will reach out during business hours.'
    }
  ];

  const ContactInfoSidebar = () => (
    <div className="md:col-span-1 bg-indigo-50 rounded-lg p-6 h-fit">
      <div className="flex items-center mb-6">
     
        <h2 className="text-xl font-bold ml-2 text-gray-800">Get in Touch</h2>
      </div>
      
    

      <div className="mt-8 pt-4 border-t border-indigo-100">
        <button 
          onClick={() => setShowContactOptions(!showContactOptions)}
          className="flex items-center text-sm text-gray-600 hover:text-slate-800"
        >
         
          Other ways to get support
        
        </button>
        
        {showContactOptions && (
          <div className="mt-3 pl-5 space-y-2 text-sm text-gray-600">
            <p>• Live chat available on dashboard</p>
            <p>• <Link href="/knowledge-base" className="text-indigo-600 hover:underline">Knowledge Base</Link></p>
            <p>• <Link href="/community" className="text-gray-600 hover:underline">Community Forum</Link></p>
            <p>• Twitter: <span className="text-gray-600">@yourcompany</span></p>
          </div>
        )}
      </div>
    </div>
  );

  const ContactItem = ({ icon, title, children }) => (
    <div className="flex items-start">
      {icon}
      <div className="ml-3">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        {children}
      </div>
    </div>
  );


  const FormField = ({ label, name, type = "text", value, onChange, error, ...props }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          rows="4"
          {...props}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          {...props}
        >
          {props.children}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          {...props}
        />
      )}
      {error && <p className="mt-1 text-sm text-slate-600">{error}</p>}
    </div>
  );


  const SuccessMessage = () => (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for reaching out. We've received your message and will respond within {timeEstimate}.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Submitted: {formState.submissionTime}
      </p>
      <button
        onClick={resetForm}
        className="py-2 px-4 bg-slate-600 hover:bg-gray-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Send Another Message

      </button>
    </div>
  );


  const FAQSection = () => (
    <div className="mt-8">
      <button
        onClick={() => setShowFAQ(!showFAQ)}
        className="flex items-center justify-between w-full text-left px-4 py-2 border-b border-gray-200 text-gray-800 font-medium"
      >
       
      </button>
      
      {showFAQ && (
        <div className="mt-4 border border-gray-200 rounded-md divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white">
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-800"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeFAQ === index ? 'transform rotate-180' : ''}`} />
              </button>
              
              {activeFAQ === index && (
                <div className="px-4 pb-3 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
            

            {formState.status === 'success' ? (
              <SuccessMessage />
            ) : (
            
              <form onSubmit={handleSubmit} className="space-y-4">
             
                <FormField 
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formState.errors.name}
                  required
                />
                
            
                <FormField 
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={formState.errors.email}
                  required
                />
                
               
                <FormField
                  label="Category"
                  name="category"
                  type="select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Questions</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunities</option>
                </FormField>
          
                <FormField 
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={formState.errors.subject}
                  required
                />
                
                <div>
                  <FormField 
                    label="Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    error={formState.errors.message}
                    required
                  />
                </div>

                <button
  className="text-3xl bg-slate-500 text-white rounded-full h-15 w-48 px-8 py-4 hover:bg-gray-600 transition-all duration-200 mx-auto flex justify-center"
>
  Submit
</button>

                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600 flex items-center">
                
                    Estimated response time: <span className="font-medium ml-1">{timeEstimate}</span>
                  </p>
                </div>
                
              </form>
            )}
          </div>
          
          <FAQSection />
          
      
          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-400 hover:underline flex items-center justify-center">
              
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;