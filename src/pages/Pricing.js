import React from 'react';
import { Card, Button } from 'react-bootstrap';

const plans = [
  {
    name: 'Basic',
    description: 'Best for beginers, single users and small teams',
    price: '$99',
    features: ['1 User', '50 SMS / day', 'Email Support'],
    popular: false,
  },
  {
    name: 'Standard',
    description: 'Suitable for small or medium sized organizations',
    price: '$299',
    features: ['10 Users', '500 SMS / day', 'Priority Support'],
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Suitable for large enterprize applications and distributed teams',
    price: '$499',
    features: ['Unlimited Users', 'unlimite SMS', '24/7 Support'],
    popular: false,
  },
];


const Pricing = () => {
  
  return (
    <div className="container py-5">
      <div className="h1 display-2 text-center mb-5"><strong>Choose Your Plan from our Simple, Transparent Pricing options</strong></div>
              <div className="h4 text-center text-muted mb-5">Choose the perfect plan for your needs. Always know what you'll pay</div>
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div className="col-md-4 mb-4 shadow-m" key={index}>
            <Card className={`shadow-sm ${plan.popular ? 'border-primary' : ''}`}>
              <Card.Body>
                <Card.Title className="text-center my-3"><strong>{plan.name}</strong></Card.Title>
                <Card.Subtitle className="text-center my-3"><span className='display-5'><strong>{plan.price}</strong></span> <span className='text-mute'>/ month</span></Card.Subtitle>
                <div className='text-center my-5 text-mute h5'>{plan.description}</div>
                <div className='list-group list-group-vertical'>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className='list-group-item text-center h6'>{feature}</div>
                  ))}
                </div>
                <Button variant={plan.popular ? 'primary' : 'outline-primary'} className="w-100">
                  {plan.popular ? 'Most Popular' : 'Choose Plan'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <h6 className='text-center my-4'>All plans include a 14-day free trial. No credit card required.</h6>
    </div>
  );

};

export default Pricing;
