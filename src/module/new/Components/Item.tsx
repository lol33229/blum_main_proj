type Props = {
    item: {
        id: number,
        title: string,
        discription: string,
        src: string,
        time: string,
    }
}

export default function Item({ item }: Props) {

    return (
        <div className={`w-full flex flex-col items-start p-[42px] mb-[59px] flex max-w-[420px] h-[702px] rounded-[30px] shadow-xl`}>
            <img src={item.src} alt="" className="w-full h-[223px]" />
            <div className="w-full flex flex-col items-start justify-center">
                <div className="w-full flex flex-col items-start mt-[20px] h-[354px]">
                    <p className="text-center text-[#1E4DC2] w-full font-semibold text-[28px] text-uppercase">{item.title}</p>
                    <p className="text-center w-full font-normal text-[25px] mt-[12px] ml-[6px]">{item.discription}</p>
                </div>
                <div>
                    <p className="text-center w-full font-bold text-[18px] mt-2 ml-[6px]">{item.time}</p>
                </div>
            </div>
        </div>
    )
}