type Props = {}

export default function Call({ }: Props) {
    return (
        <div className="w-full mt-6 px-4 sm:px-6">
            <div className="w-full flex items-center justify-center">
                <div
                    className="bg-cover bg-center bg-no-repeat rounded-[20px] sm:rounded-[40px] max-w-[1258px] w-full h-[400px] sm:h-[606px] pt-[60px] sm:pt-[92px]"
                    style={{ backgroundImage: 'url("/image/1.png")' }}
                >
                    <h1 className="font-normal text-[24px] sm:text-[40px] text-[#FFFFFF] uppercase text-center">
                        Откройте новые горизонты для вашего бизнеса
                    </h1>
                    <div className="flex items-center justify-center mt-[20px] sm:mt-[40px]">
                        <p className="font-normal text-[16px] sm:text-[36px] text-[#FFFFFF] text-center max-w-[300px] sm:max-w-[848px]">
                            Используйте открытые идеи для настройки процесса сбора и управления инновационными инициативами сотрудников
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-[20px] sm:mt-[40px]">
                        <a
                            className="font-normal text-[16px] sm:text-[36px] text-[#1E4DC2] text-center max-w-[300px] sm:max-w-[848px] bg-[#FFFFFF] rounded-[20px] sm:rounded-[40px] py-[12px] sm:py-[20px] px-[30px] sm:px-[50px]"
                            href="#contact"
                        >
                            СВЯЗАТЬСЯ С НАМИ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
