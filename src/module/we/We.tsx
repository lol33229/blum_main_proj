import Item from "./Components/Item"
type Props = {}

export default function We({}: Props) {
    const items = [
        {
            id: 1,
            title: 'База знаний BI-аналитика ',
            discription: 'Обеспечивает доступ к базе знаний по оптимизации процессов. Предлагает инструменты для бизнес-интеллектуальной аналитики.',
            src: '/public/image/11.png'
        },
        {
            id: 2,
            title: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА',
            discription: 'Круглосуточная служба технической поддержки help@aratrum.ru.',
            src: '/public/image/12.png'
        },
        {
            id: 3,
            title: 'ИНДВИДУАЛЬНЫЙ ПОДХОД',
            discription: 'Стоимость рассчитывается индивидуально, что позволяет выбрать оптимальное решение для каждой компании..',
            src: '/public/image/13.png'
        },
    ]

  return (
    <div className='w-full mt-10'>
        <h1 className='font-semibold text-[40px] text-[#1E4DC2] uppercase text-center'>ПОЧЕМУ МЫ?</h1>
        <div className="mt-10">
            <div className="w-full flex justify-between flex-wrap">
                {items.map((item) => {
                    return (
                        <Item key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}