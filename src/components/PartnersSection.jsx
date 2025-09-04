import React from 'react';
import '../style/PartnersSection.css';

const partners = [
  { id: 1, src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/5.png", alt: "Partner 5" },
  { id: 2, src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png", alt: "Partner 4" },
  { id: 3, src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png", alt: "Partner 3" },
  { id: 4, src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/2.png", alt: "Partner 2" },
  { id: 5, src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png", alt: "Partner 1" },

];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="partner_title">
              <h3>Trusted Company Around The World!</h3>
            </div>
          </div>
        </div>
        
        {}
        <div className="partners-carousel">
          {partners.map(partner => (
            <div key={partner.id} className="partner-item">
              <a href="#">
                <img src={partner.src} alt={partner.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;