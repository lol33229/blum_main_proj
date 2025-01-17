import Item from "./components/Item";

type Props = {};

export default function About({}: Props) {
    const items = [
        {
            id: 1,
            title: "ОТКРЫТОЕ ПРОСТРАНСТВО",
            discription: "Сотрудники могут свободно предлагать свои идеи по улучшению рабочих процессов.",
            src: "/image/2.png",
        },
        {
            id: 2,
            title: "ТЕЛЕГРАМ-БОТ",
            discription: "Автоматизированный ассистент помогает быстро вводить и отслеживать предложения.",
            src: "/image/3.png",
        },
        {
            id: 3,
            title: "АНАЛИТИКА ДЛЯ АДМИНОВ",
            discription: "Инструменты для анализа популярности идей и оценки их потенциала.",
            src: "/image/4.png",
        },
        {
            id: 4,
            title: "РЕЙТИНГОВАЯ СИСТЕМА",
            discription: "Система рейтинга позволяет оценивать и сортировать предложения по важности.",
            src: "/image/5.png",
        },
    ];

    return (
        <div className="w-full mt-10 px-4 sm:px-6" id="about">
            {/* Заголовок */}
            <h1 className="font-semibold text-[24px] sm:text-[40px] text-[#1E4DC2] uppercase text-center">О НАС</h1>

            {/* Первый блок */}
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
                <h1 className="font-normal text-[24px] sm:text-[40px] text-[#1E4DC2] text-center relative">
                    Наш сервис
                </h1>
                <div className="w-full bg-[#A4F4FE75] rounded-[30px] p-4 sm:p-6 max-w-full md:max-w-[914px] h-auto md:h-[530px]">
                    <p className="font-normal text-[18px] sm:text-[24px] md:text-[32px] text-[#1E4DC2]">
                        "Открытые Идеи" - это инновационная платформа для сбора и оценки предложений сотрудников по улучшению процессов в компании. Наша команда работает над проектом уже более ** лет, постоянно совершенствуясь и развиваясь вместе с клиентами. На данный момент команда Открытых Идей состоит из *** специалистов в области технологических инноваций. Мы продолжаем расширять нашу команду и улучшать функционал платформы для лучшего удовлетворения потребностей наших клиентов.
                    </p>
                </div>
            </div>

            {/* Второй блок */}
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
                <h1 className="font-normal text-[24px] sm:text-[40px] text-[#1E4DC2] text-center relative">
                    Его работа
                </h1>
                <div className="w-full p-4 max-w-full md:max-w-[900px]">
                    {items.map((item) => {
                        return <Item key={item.id} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
