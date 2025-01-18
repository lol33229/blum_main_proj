type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full flex flex-col shadow p-6 sm:p-[34px] bg-[#EBEBEBB2] rounded">
      {/* Верхний блок */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
        <img src="/icons/logo.svg" alt="Logo" className="w-[120px] sm:w-auto" />
        <p className="text-[#1E4DC2] text-[16px] sm:text-[20px] font-semibold text-center sm:text-left">
          Наша почта: inbox@aratrum.ru
        </p>
        <p className="text-[#1E4DC2] text-[16px] sm:text-[20px] font-semibold text-center sm:text-left">
          Наш номер: <br /> 8-922-000-00-00
        </p>
        <p className="text-[#1E4DC2] text-[16px] sm:text-[20px] font-semibold text-center sm:text-left">
          Наш адрес: <br /> г. Екатеринбург, ул. Конструкторов, д. 5
        </p>
      </div>

      {/* Средний блок */}
      <div className="w-full flex flex-col sm:flex-row justify-between mt-8 sm:mt-[55px] gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-[#000000A1] text-[18px] sm:text-[22px] font-semibold text-center sm:text-left">
            Мы находимся в реестре отечественного ПО
          </p>
          <p className="text-[#00000078] text-[16px] sm:text-[22px] font-semibold text-center sm:text-left">
            Продукт ОТКРЫТЫЕ ИДЕИ компании ООО « *** » находится в едином реестре российского программного обеспечения №19382
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#000000A1] text-[18px] sm:text-[22px] font-semibold text-center sm:text-left">
            Общество с ограниченной ответственностью « *** »
          </p>
          <p className="text-[#00000078] text-[16px] sm:text-[22px] font-semibold text-center sm:text-right">
            Сервис сбора инициатив
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#00000078] text-[14px] sm:text-[16px] font-semibold text-center sm:text-right">
              ОГРН <br /> 123123123
            </p>
            <p className="text-[#00000078] text-[14px] sm:text-[16px] font-semibold text-center sm:text-right">
              ИНН <br /> 123123123
            </p>
            <p className="text-[#00000078] text-[14px] sm:text-[16px] font-semibold text-center sm:text-right">
              КПП <br /> 123123123
            </p>
          </div>
        </div>
      </div>

      {/* Нижний блок */}
      <div className="mt-8 sm:mt-14">
        <p className="text-center text-[#00000078] text-[16px] sm:text-[20px] font-semibold">
          Политика конфиденциальности
        </p>
      </div>
    </div>
  );
}
