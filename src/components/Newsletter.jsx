import React from 'react';
import '../style/Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="subs_form">
                    <h3>Subscripbe to our newsletter, We don't make any spam.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
                    <div className="home_subs">
                        <form className="newsletter-form">
                            <input
                                type="text"
                                name="EMAIL"
                                className="form-control subscribe__input"
                                placeholder="Enter your Email Address"
                                required="required"
                            />
                            <button type="submit" className="subscribe__btn">
                                <i className="fa fa-paper-plane-o"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;