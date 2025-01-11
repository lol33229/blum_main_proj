import React, { useState } from 'react';

type Props = {}

export default function Header({ }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Стандартный header для ПК */}
      <div className="hidden md:flex w-full p-4 items-center justify-between">
        <img src="/public/icons/logo.svg" alt="Логотип" />
        <div className='w-full flex items-center justify-between ml-[61px]'>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#about">О нас</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#2">Новости</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#3">Преимущества</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#why">Почему мы</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#contact">Связь с нами</a>
        </div>
      </div>

      {/* Мобильный header с бургер-меню */}
      <div className="flex md:hidden w-full p-4 items-center justify-between">
        <img src="/public/icons/logo.svg" alt="Логотип" />
        <button
          className="p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Бургер-иконка */}
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col p-4 bg-white shadow-lg">
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px] mb-2" href="#about">О нас</a>
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px] mb-2" href="#news">Новости</a>
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px] mb-2" href="#features">Преимущества</a>
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px] mb-2" href="#why">Почему мы</a>
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px]" href="#contact">Связь с нами</a>
        </nav>
      )}
    </header>
  );
}
