import React, { useMemo, useState } from 'react';

const Contact = () => {
  const formKeys = useMemo(() => ['apply', 'donate', 'partner'], []);
  const formsMeta = {
    apply: {
      label: 'Apply for Housing',
      subject: 'New Room for All housing application',
      success: 'Thank you! Our housing navigator will reach out within 2 business days.',
      description:
        'Tell us a bit about your situation so we can match you with the right transitional room and supports.',
    },
    donate: {
      label: 'Give Support',
      subject: 'New Room for All donation inquiry',
      success: 'Thank you! We will send next steps for completing your contribution.',
      description:
        'Share how you would like to fund safe transitional housing—one-time gifts, monthly support, or in-kind resources.',
    },
    partner: {
      label: 'Partner with Us',
      subject: 'New Room for All partnership inquiry',
      success: 'Thank you! We will coordinate a partnership call very soon.',
      description:
        'Bring your organization, business, or agency alongside Room for All to build pathways for returning citizens.',
    },
  };

  const defaultStatus = formKeys.reduce(
    (acc, key) => ({ ...acc, [key]: { type: null, message: '' } }),
    {}
  );
  const defaultLoading = formKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});

  const [activeForm, setActiveForm] = useState('apply');
  const [statusMap, setStatusMap] = useState(defaultStatus);
  const [loadingMap, setLoadingMap] = useState(defaultLoading);
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  const resetStatusFor = (formKey) => {
    setStatusMap((prev) => ({
      ...prev,
      [formKey]: { type: null, message: '' },
    }));
  };

  const setStatusFor = (formKey, payload) => {
    setStatusMap((prev) => ({
      ...prev,
      [formKey]: payload,
    }));
  };

  const setLoadingFor = (formKey, value) => {
    setLoadingMap((prev) => ({
      ...prev,
      [formKey]: value,
    }));
  };

  const extractName = (formData) =>
    formData.get('name') ||
    formData.get('applicant_name') ||
    formData.get('contact_name') ||
    formData.get('organization') ||
    'Room for All Website';

  const extractEmail = (formData) =>
    formData.get('email') ||
    formData.get('contact_email') ||
    formData.get('donor_email') ||
    '';

  const handleSubmit = async (event, formKey) => {
    event.preventDefault();
    resetStatusFor(formKey);

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatusFor(formKey, {
        type: 'error',
        message:
          'Missing Web3Forms access key. Please set VITE_WEB3FORMS_KEY in your environment variables.',
      });
      return;
    }

    const meta = formsMeta[formKey];

    try {
      setLoadingFor(formKey, true);
      const formData = new FormData(event.target);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', meta.subject);
      formData.append('form_type', meta.label);
      formData.append('from_name', extractName(formData));
      formData.append('reply_to', extractEmail(formData));
      formData.append('from_email', extractEmail(formData));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatusFor(formKey, { type: 'success', message: meta.success });
        event.target.reset();
      } else {
        setStatusFor(formKey, {
          type: 'error',
          message: data.message || 'We could not send your message. Please try again later.',
        });
      }
    } catch (error) {
      setStatusFor(formKey, {
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      });
    } finally {
      setLoadingFor(formKey, false);
    }
  };

  const renderApplyForm = () => (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e, 'apply')}>
      <h3>Transitional Housing Intake</h3>
      <p className="form-description">{formsMeta.apply.description}</p>
      <div className="form-row">
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="email" placeholder="Email address" required />
      </div>
      <div className="form-row">
        <input type="tel" name="phone" placeholder="Phone number" required />
        <select name="timeline" defaultValue="" required>
          <option value="" disabled>
            Preferred move-in timeline
          </option>
          <option value="immediately">Immediately</option>
          <option value="30-days">Within 30 days</option>
          <option value="60-days">1-2 months</option>
          <option value="90-plus">3 months or later</option>
        </select>
      </div>
      <label className="field-label">Housing need</label>
      <select name="housing_need" defaultValue="" required>
        <option value="" disabled>
          Choose the best fit
        </option>
        <option value="returning-citizen">Returning citizen reentry housing</option>
        <option value="family-reunification">Family reunification</option>
        <option value="domestic-violence">Fleeing violence or unsafe housing</option>
        <option value="unstable-shelter">General housing instability</option>
        <option value="other">Other / not listed</option>
      </select>
      <label className="field-label">Support priorities</label>
      <div className="chip-list">
        {[
          'Case management',
          'Employment connections',
          'Counseling / mental health',
          'Legal support',
          'Transportation',
          'Family services',
        ].map((item) => (
          <label key={item} className="chip">
            <input type="checkbox" name="supports[]" value={item} />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <textarea
        name="story"
        placeholder="Share any immediate needs, background information, or questions."
        rows="4"
      />
      <button type="submit" className="btn-primary" disabled={loadingMap.apply}>
        {loadingMap.apply ? 'Sending…' : 'Submit application'}
      </button>
      {statusMap.apply.message && (
        <p className={`form-message ${statusMap.apply.type === 'error' ? 'error' : 'success'}`}>
          {statusMap.apply.message}
        </p>
      )}
    </form>
  );

  const renderDonateForm = () => (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e, 'donate')}>
      <h3>Fuel Transitional Housing</h3>
      <p className="form-description">{formsMeta.donate.description}</p>
      <div className="form-row">
        <input type="text" name="name" placeholder="Full name or organization" required />
        <input type="email" name="email" placeholder="Email address" required />
      </div>
      <label className="field-label">Gift amount</label>
      <div className="chip-list pill">
        {['$100', '$250', '$500', '$1,000+'].map((amount) => (
          <label key={amount} className="chip">
            <input type="radio" name="donation_amount" value={amount} required />
            <span>{amount}</span>
          </label>
        ))}
        <label className="chip">
          <input type="radio" name="donation_amount" value="custom" required />
          <span>Custom</span>
        </label>
      </div>
      <input type="text" name="custom_amount" placeholder="Custom amount (if selected)" />
      <label className="field-label">Gift frequency</label>
      <div className="pill-toggle">
        <label>
          <input type="radio" name="donation_frequency" value="one-time" defaultChecked />
          <span>One-time</span>
        </label>
        <label>
          <input type="radio" name="donation_frequency" value="monthly" />
          <span>Monthly</span>
        </label>
        <label>
          <input type="radio" name="donation_frequency" value="in-kind" />
          <span>In-kind support</span>
        </label>
      </div>
      <textarea
        name="message"
        placeholder="Share any details about your gift or matching programs."
        rows="4"
      />
      <button type="submit" className="btn-primary" disabled={loadingMap.donate}>
        {loadingMap.donate ? 'Submitting…' : 'Share donation interest'}
      </button>
      {statusMap.donate.message && (
        <p className={`form-message ${statusMap.donate.type === 'error' ? 'error' : 'success'}`}>
          {statusMap.donate.message}
        </p>
      )}
    </form>
  );

  const renderPartnerForm = () => (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e, 'partner')}>
      <h3>Partnership Inquiry</h3>
      <p className="form-description">{formsMeta.partner.description}</p>
      <div className="form-row">
        <input type="text" name="organization" placeholder="Organization / agency" required />
        <input type="text" name="name" placeholder="Point of contact" required />
      </div>
      <div className="form-row">
        <input type="email" name="email" placeholder="Work email" required />
        <input type="tel" name="phone" placeholder="Contact phone (optional)" />
      </div>
      <label className="field-label">How would you like to collaborate?</label>
      <div className="chip-list">
        {[
          'Employment opportunities',
          'Mentorship & coaching',
          'Housing referrals',
          'Funding or sponsorship',
          'Restorative justice programming',
          'Other collaboration',
        ].map((item) => (
          <label key={item} className="chip">
            <input type="checkbox" name="partnership_focus[]" value={item} />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <textarea
        name="message"
        placeholder="Describe your vision for partnership or any questions you have."
        rows="4"
      />
      <button type="submit" className="btn-primary" disabled={loadingMap.partner}>
        {loadingMap.partner ? 'Sharing…' : 'Start the conversation'}
      </button>
      {statusMap.partner.message && (
        <p className={`form-message ${statusMap.partner.type === 'error' ? 'error' : 'success'}`}>
          {statusMap.partner.message}
        </p>
      )}
    </form>
  );

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'apply':
        return renderApplyForm();
      case 'donate':
        return renderDonateForm();
      case 'partner':
      default:
        return renderPartnerForm();
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-kicker">Connect</span>
            <h2>Let’s open doors together.</h2>
            <p className="section-lead">
              Whether you need a safe landing, want to fund a room, or are ready to partner, Room for
              All is here to walk with returning citizens into new beginnings.
            </p>
            <div className="contact-owner">
              <span className="owner-label">Contact our team</span>
              <h3>Adrian Hernandez, Founder</h3>
              <p className="owner-email">room.for.all2025@gmail.com</p>
            </div>
            <ul className="contact-highlights">
              <li>Transitional housing tailored for returning citizens</li>
              <li>Wraparound support &amp; employment pathways</li>
              <li>Community partners that believe in second chances</li>
            </ul>
          </div>
          <div className="contact-panel">
            <div className="contact-tabs" role="tablist" aria-label="Contact form options">
              {formKeys.map((key) => (
                <button
                  key={key}
                  role="tab"
                  type="button"
                  className={key === activeForm ? 'active' : ''}
                  aria-selected={key === activeForm}
                  onClick={() => {
                    setActiveForm(key);
                    resetStatusFor(key);
                  }}
                >
                  {formsMeta[key].label}
                </button>
              ))}
            </div>
            <div className="contact-forms" role="tabpanel">
              {renderActiveForm()}
            </div>
            <p className="form-helper">
              All submissions go directly to room.for.all2025@gmail.com via secure Web3Forms, and we
              typically respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
