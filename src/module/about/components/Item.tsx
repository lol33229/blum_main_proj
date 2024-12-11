type Props = {
    item: {
        id: number,
        title: string,
        discription: string,
        src: string,
    }
}

export default function Item({item}: Props) {
  return (
    <div className='w-full flex items-center mb-[59px]'>
        <div className='w-[133px] h-[133px] object-cover rounded-full bg-[#A4F4FE75] flex items-center justify-center'>
            <img src={item.src} alt="" className='' height={90} width={90} />
        </div>
        <div className='ml-[112px]'>
            <p className='font-normal text-[35px] text-[#1E4DC2B8] uppercase text-center'>{item.title}</p>
            <p className='font-normal text-[28px] text-[#000000] text-center mt-[20px] max-w-[511px]'>{item.discription}</p>
        </div>
    </div>
  )
}