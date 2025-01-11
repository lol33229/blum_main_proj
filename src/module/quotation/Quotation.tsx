type Props = {}

export default function Quotation({ }: Props) {
    return (
        <div className='w-full bg-[#CDFFFE75] h-[208px] py-10 px-24 flex justify-between '>
            <img className='opacity-35' src="/public/image/6.png" alt="" height={96} width={145} />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-[32px] text-[#000000] text-right leading-[43px] max-w-[1039px]'>Новые идеи надо поддерживать. Немногие имеют такую смелость, но это очень драгоценное свойство людей.</h1>
                <p className='font-normal text-[28px] text-[#1E4DC2] text-right leading-[43px] max-w-[1039px]'>Константин Циолковский, российский и советский учёный</p>
            </div>
        </div>
    )
}