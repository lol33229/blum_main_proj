type Props = {}

export default function Quotation({}: Props) {
    return (
        <div className="w-full bg-[#CDFFFE75] py-6 sm:py-10 px-4 sm:px-24 flex flex-col sm:flex-row justify-between items-center">
            {/* Изображение */}
            <img
                className="opacity-35 mb-4 sm:mb-0"
                src="/image/6.png"
                alt=""
                height={96}
                width={145}
            />
            {/* Текстовая часть */}
            <div className="flex flex-col justify-center items-center sm:items-end">
                <h1 className="font-semibold text-[18px] sm:text-[32px] text-[#000000] text-center sm:text-right leading-[26px] sm:leading-[43px] max-w-full sm:max-w-[1039px]">
                    Новые идеи надо поддерживать. Немногие имеют такую смелость, но это очень драгоценное свойство людей.
                </h1>
                <p className="font-normal text-[14px] sm:text-[28px] text-[#1E4DC2] text-center sm:text-right leading-[20px] sm:leading-[43px] max-w-full sm:max-w-[1039px] mt-2 sm:mt-4">
                    Константин Циолковский, российский и советский учёный
                </p>
            </div>
        </div>
    );
}
