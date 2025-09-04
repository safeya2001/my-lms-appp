import React from 'react';
import '../style/PricingSection.css';

const pricingPlans = [
  {
    plan: 'Free',
    price: '0',
    period: '/Month',
    details: 'Upgrade as you need',
    features: [
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
    ],
  },
  {
    plan: 'Saver plan',
    price: '29',
    period: '/Month',
    details: '$348 Per Year',
    features: [
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
    ],
  },
  {
    plan: 'Unlimited plan',
    price: '49',
    period: '/Month',
    details: '$588 Per Year',
    features: [
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
      'Learn at your own pace',
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Popular Courses</h2>
          <p>
            Choose Our <span><u>Top Courses</u></span>
          </p>
        </div>
        <div className="row justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="pricing_design">
                <div className="single-pricing">
                  <div className="price-head">
                    <h2>{plan.plan}</h2>
                    <h1>${plan.price}</h1>
                    <span>{plan.period}</span>
                    <span className="upgrade_price">{plan.details}</span>
                  </div>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="ti-notepad"></span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="price_btn">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;