import React from 'react';

const Accordion = () => {
    return (
        <div className='w-11/12 mx-auto mb-4'>
             <h2 className='text-3xl font-bold text-center mb-2'>Frequently Asked Questtion</h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
               
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What is EasyPayBD?</div>
  <div className="collapse-content text-sm">
    EasyPayBD is a web-based bill management platform that lets users pay various bills easily using their preferred payment methods.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Is EasyPayBD secure for online transactions?</div>
  <div className="collapse-content text-sm">
    Yes, EasyPayBD provides a secure and fast transaction system with real-time notifications and updates on your payment status.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Can I use EasyPayBD on my mobile device?</div>
  <div className="collapse-content text-sm">
    Absolutely! EasyPayBD has a fully responsive design, ensuring smooth usability on both mobile and desktop devices.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What types of bills can I pay with EasyPayBD?</div>
  <div className="collapse-content text-sm">
    You can pay a wide range of bills, including utility, internet, and other service-related payments—all from one convenient platform.
  </div>
</div>

        </div>
    );
};

export default Accordion;