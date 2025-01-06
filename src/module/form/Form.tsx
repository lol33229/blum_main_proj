import React, { useState } from 'react';
import axios from 'axios';

type Props = {};

export default function Form({ }: Props) {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      full_name: fullName,
      organization: organization,
      email: email,
      phone_number: phoneNumber,
      message: message,
    };

    try {
      const response = await axios.post('http://localhost/api/contact-forms/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full mt-10' id="contact">
      <h1 className='font-semibold text-[40px] text-[#1E4DC2] uppercase text-center'>ПРЕИМУЩЕСТВА</h1>
      <div className="mt-10 h-[566px]" style={{ backgroundImage: 'url("/image/14.png")' }}>
        <div className="w-full flex justify-end flex-wrap">
          <form onSubmit={handleSubmit} className="w-[789px] h-[637px] px-[20px] bg-blue-200 mt-[-40px] rounded-[20px] flex flex-col justify-center gap-6 opacity-90">
            <input
              type="text"
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
              placeholder='Фио'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
              placeholder='Название компании'
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <input
              type="email"
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <InputMask
              mask="8 (999) 999-99-99"
              placeholder='Телефон'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
            /> */}
            <input
              type="text"
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
              placeholder='Номер телефона'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]'
              placeholder='Вопрос'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="w-full flex items-center justify-center">
              <button type="submit" className='w-[251px] h-[60px] rounded-[40px] bg-[#1E4DC2] text-uppercase text-[28px] text-[#FFFFFF]'>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}