type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='w-full'>
      <div className='w-full p-4 flex items-center'>
        <img src="/public/icons/logo.svg" alt="" />
        <div className='w-full flex items-center justify-between ml-[61px]'>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]'>О нас</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]'>Новости</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]'>Преимущества</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]'>Почему мы</a>
          <a className='text-[#1E4DC2] font-normal text-[30px] leading-[36px]'>Связь с нами</a>
        </div>
      </div>
    </div>
  )
}