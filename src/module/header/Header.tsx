type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='w-full'>
      <div className='w-full p-4 flex items-center'>
        <img src="/icons/logo.svg" alt="" />
        <div className='w-full flex items-center justify-between ml-[61px]'>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#about">О нас</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#2">Новости</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#3">Преимущества</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#why">Почему мы</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]' href="#contact">Связь с нами</a>
        </div>
      </div>
    </div>
  )
}