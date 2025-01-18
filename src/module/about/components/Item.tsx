type Props = {
    item: {
        id: number;
        title: string;
        discription: string;
        src: string;
    };
};

export default function Item({ item }: Props) {
    return (
        <div className="w-full flex flex-col md:flex-row items-center mb-12 md:mb-[59px]">
            {/* Круглый контейнер для изображения */}
            <div className="w-[100px] h-[100px] sm:w-[133px] sm:h-[133px] object-cover rounded-full bg-[#A4F4FE75] flex items-center justify-center">
                <img
                    src={item.src}
                    alt={item.title}
                    className="object-cover rounded-full"
                    width={90}
                    height={90}
                />
            </div>

            {/* Контейнер для текста */}
            <div className="mt-6 md:mt-0 md:ml-8 lg:ml-[112px] text-center md:text-left">
                {/* Заголовок */}
                <p className="font-normal text-[20px] sm:text-[28px] md:text-[35px] text-[#1E4DC2B8] uppercase">
                    {item.title}
                </p>
                {/* Описание */}
                <p className="font-normal text-[16px] sm:text-[20px] md:text-[28px] text-[#000000] mt-[12px] md:mt-[20px] max-w-[90%] sm:max-w-[511px] mx-auto md:mx-0">
                    {item.discription}
                </p>
            </div>
        </div>
    );
}
