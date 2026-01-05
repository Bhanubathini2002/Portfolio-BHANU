import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

type FormState = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: false }));
    };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameError = formData.name.trim() === '';
    const emailError = formData.email.trim() === '';
    const messageError = formData.message.trim() === '';

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (nameError || emailError || messageError) return;

    // EmailJS recommended usage pattern supports passing publicKey in options. [web:3]
    try {
      await emailjs.send(
        'service_214yk41',
        'template_c47d30c',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { publicKey: 'i8IEKmZnyv_M2hWht' }
      );

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS failed:', err);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleChange('name')}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ' '}
                fullWidth
              />

              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={formData.email}
                onChange={handleChange('email')}
                error={errors.email}
                helperText={errors.email ? 'Please enter your email or phone number' : ' '}
                fullWidth
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={formData.message}
              onChange={handleChange('message')}
              error={errors.message}
              helperText={errors.message ? 'Please enter the message' : ' '}
              fullWidth
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
