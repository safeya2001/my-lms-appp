import React from 'react';
import './AchievementCounter.css';

const achievements = [
    {
        id: 1,

        iconSrc: "https://cdn-icons-png.flaticon.com/512/3746/3746927.png",
        iconColor: "#5b4aef",
        count: 854,
        label: "Enrolled Students"
    },
    {
        id: 2,
        iconSrc: "https://tse2.mm.bing.net/th/id/OIP.3LQeLFWCtrdAlvQvZt7dxAHaHa?cb=thfvnext&pid=ImgDet&w=132&h=132&c=7&dpr=1.3&o=7&rm=3",
        iconColor: "#EE6C20",
        count: 521,
        label: "Academic Programs"
    },
    {
        id: 3,
        iconSrc: "https://cdn11.bigcommerce.com/s-80p6top/product_images/uploaded_images/contact-us-icon-green.png",
        iconColor: "#15BE56",
        count: 163,
        label: "Winning Award"
    },
    {
        id: 4,
        iconSrc: "https://clearviewtreatment.com/wp-content/uploads/2021/10/profile-pic-vector-icon.png",
        iconColor: "#BB0852",
        count: 93,
        label: "Certified Students"
    }
];

const AchievementCounter = () => {
    return (
        <section className="achievement-section">
            <div className="container">
                <div className="section-title">
                    <h2>Some Fun Fact</h2>
                    <p>Our Great <span className="highlight-text-underline">Achievement</span></p>
                </div>
                <div className="row">
                    {achievements.map(item => (
                        <div key={item.id} className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <img src={item.iconSrc} alt={item.label} style={{ width: '48px', height: '48px' }} />
                                <div>
                                    <span className="purecounter">{item.count}</span>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementCounter;