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
    <div
      className={`w-full flex flex-col md:flex-row items-center md:items-start p-6 md:p-4 justify-between mb-6 md:mb-[59px] max-w-full md:max-w-[648px] h-[300px] md:h-[230px] rounded-[20px] ${
        item.id === 1 || item.id === 4 ? "bg-[#1E4DC2CC]" : "bg-[#7CF0FF]"
      }`}
    >
      {/* Изображение */}
      <div className="flex-shrink-0">
        <img
          src={item.src}
          alt={item.title}
          className="w-[70px] h-[70px] sm:w-[92px] sm:h-[92px] object-contain"
        />
      </div>

      {/* Текстовый блок */}
      <div className="flex flex-col items-center md:items-start justify-center w-full mt-4 md:mt-0">
        <p className="text-center md:text-end w-full font-semibold text-[18px] sm:text-[24px] md:text-[28px]">
          {item.title}
        </p>
        <p className="text-center md:text-end w-full font-normal text-[16px] sm:text-[20px] md:text-[25px] mt-4 md:mt-[24px]">
          {item.discription}
        </p>
      </div>
    </div>
  );
}
