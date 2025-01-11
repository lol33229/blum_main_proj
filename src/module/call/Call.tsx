type Props = {}

export default function Call({ }: Props) {
    return (
        <div className='w-full mt-6'>
            <div className='w-full flex items-center justify-center'>
                <div
                    className='bg-cover bg-center bg-no-repeat rounded-[40px] max-w-[1258px] w-full h-[606px] pt-[92px]'
                    style={{ backgroundImage: 'url("/image/1.png")' }}
                >
                    <h1 className='font-normal text-[40px] text-[#FFFFFF] uppercase text-center'>Откройте новые горизонты для вашего бизнеса</h1>
                    <div className='flex items-center justify-center mt-[40px]'>
                        <p className='font-normal text-[36px] text-[#FFFFFF] text-center max-w-[848px]'>используйте открытые идеи для настройки процесса сбора и управления инновационными инициативами сотрудников</p>
                    </div>
                    <div className='flex items-center justify-center mt-[78px]'>
                        <a className='font-normal text-[36px] text-[#1E4DC2] text-center max-w-[848px] bg-[#FFFFFF] rounded-[40px] py-[20px] px-[50px] ' href="#contact">СВЯЗАТЬСЯ С НАМИ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}