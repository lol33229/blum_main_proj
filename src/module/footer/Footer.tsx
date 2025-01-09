

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='w-full h-[405px] flex flex-col shadow p-[34px] bg-[#EBEBEBB2] rounded'>
        <div className='w-full flex justify-between'>
            <img src="/icons/logo.svg" alt="" />
            <p className='w-[220px] text-[#1E4DC2] text-[20px] font-semibold'>Наша почта: inbox@aratrum.ru</p>
            <p className='w-[160px] text-[#1E4DC2] text-[20px] font-semibold'>Наш номер: <br /> 8-922-000-00-00</p>
            <p className='w-[390px] text-[#1E4DC2] text-[20px] font-semibold'>Наш адрес: <br /> г. Екатеринбург, ул. Конструкторов, д. 5</p>
        </div>
        <div className='w-full flex justify-between mt-[55px]'>
            <div>
                <p className='text-[#000000A1] text-[22px] font-semibold'>Мы находимся в реестре отчественного ПО</p>
                <p className='mt-[33px] text-[#00000078] text-[22px] font-semibold max-w-[567px]'>Продукт ОТКРЫТЫЕ ИДЕИ компании ООО « *** » находится в едином реестре российского программного обеспечения №19382</p>
            </div>
            <div>
                <p className='text-[#000000A1] text-[22px] font-semibold'>Общество с ограниченной отвественностью « *** » </p>
                <p className='text-end mt-[33px] text-[#00000078] text-[22px] font-semibold max-w-[567px]'>Сервис сбора инициатив</p>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-end text-[#00000078] text-[16px] font-semibold'>ОГРН <br /> 123123123</p>
                    <p className='text-end text-[#00000078] text-[16px] font-semibold'>ИНН <br /> 123123123</p>
                    <p className='text-end text-[#00000078] text-[16px] font-semibold'>КПП <br /> 123123123</p>
                </div>
            </div>
        </div>
        <div>
            <p className='text-center text-[#00000078] text-[20px] font-semibold w-full mt-14'>Политика конфиденциальности</p>
        </div>
    </div>
  )
}