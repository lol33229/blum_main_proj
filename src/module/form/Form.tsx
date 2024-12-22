import React from 'react'

type Props = {}

export default function Form({}: Props) {
  return (
    <div className='w-full mt-10' id="contact">
        <h1 className='font-semibold text-[40px] text-[#1E4DC2] uppercase text-center'>ПРЕИМУЩЕСТВА</h1>
        <div className="mt-10 h-[566px]" style={{ backgroundImage: 'url("/image/14.png")' }}>
            <div className="w-full flex justify-end flex-wrap">
                <div className="w-[789px] h-[637px] px-[20px] bg-blue-200 mt-[-40px] rounded-[20px] flex flex-col justify-center gap-6 opacity-90">
                    <input type="text" className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]' placeholder='Фио' />
                    <input type="text" className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]' placeholder='Название компании' />
                    <input type="text" className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]' placeholder='Email' />
                    <input type="text" className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]' placeholder='Номер телефона' />
                    <input type="text" className='w-full h-[68px] rounded-[40px] py-[21px] px-[36px]' placeholder='Вопрос' />
                    <div className="w-full flex items-center justify-center">
                    <button className='w-[251px] h-[60px] rounded-[40px] bg-[#1E4DC2] text-uppercase text-[28px] text-[#FFFFFF]'>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}