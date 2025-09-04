import React, { useState } from 'react';
import '../style/FAQs.css';

const faqs = [
  {
    question: "What does it take excellent author?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
  },
  {
    question: "Who will view my content?",
    answer: "The visibility of your content depends on your chosen settings and platform. It can be viewed by all users, a specific community, or kept private. This ensures you have full control over who accesses your work."
  },
  {
    question: "What does it take become an author?",
    answer: "Becoming an author requires a passion for sharing knowledge, expertise in your field, and a commitment to creating high-quality content. Our platform makes it easy to get started with intuitive tools and a supportive community."
  },
  {
    question: "How to Change my Password easily?",
    answer: "To change your password, simply navigate to your profile settings. You will find an option to update your password securely by following the on-screen instructions. A confirmation email may be sent to your registered email address."
  },
  {
    question: "How does it create content?",
    answer: "Our system uses advanced algorithms and user-friendly tools to help you auto-generate catchy, original, and high-converting copies in popular tones and languages. This streamlines the content creation process for you."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-content-left">
        <p className="faq-subtitle">FREQUENTLY ASKED QUESTION</p>
        <h2 className="faq-title">General Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                <span className="question-text">{faq.question}</span>
                <span className="arrow-icon">
                  <i className="fa fa-chevron-down"></i>
                </span>
              </button>
              <div className="faq-answer-container">
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-image-right">
        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/faq.png" alt="FAQ illustration" />
      </div>
    </section>
  );
};

export default FAQs;