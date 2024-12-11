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
      <div className={`w-full flex items-center flex-col mb-[59px] max-w-[461px]`}>
        <img src={item.src} alt="" height={92} width={92} />
        <div className="w-full flex flex-col items-start justify-center mt-[20px]">
          <p className="w-full font-semibold text-[28px] text-center">{item.title}</p>
          <p className="w-full font-normal text-[25px] mt-[24px] ml-[6px] text-center">{item.discription}</p>
        </div>
      </div>
    )
  }