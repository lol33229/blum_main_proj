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
    <div className={`w-full flex items-start p-4 justify-between mb-[59px] flex max-w-[648px] h-[230px] rounded-[30px] ${item.id  === 1 || item.id === 4 ? 'bg-[#1E4DC2CC]' : 'bg-[#7CF0FF]'}`}>
      <img src={item.src} alt="" height={92} width={92} />
      <div className="w-full flex flex-col items-start justify-center mt-[20px]">
        <p className="text-end w-full font-semibold text-[28px]">{item.title}</p>
        <p className="text-end w-full font-normal text-[25px] mt-[24px] ml-[6px]">{item.discription}</p>
      </div>
    </div>
  )
}