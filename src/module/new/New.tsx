import Item from "./Components/Item"
type Props = {}

export default function New({}: Props) {
    const items = [
        {
            id: 1,
            title: 'НАШИ СОТРУДНИКИ',
            discription: 'С другой стороны сложившаяся структура организации играет важную роль в формировании систем массового участия. Не следует, однако забывать, что начало повседневной работы.',
            time: '25 мая 2025',
            src: '/image/15.png'
        },
        {
            id: 2,
            title: 'НАШ ОФИС',
            discription: 'Повседневная практика показывает, что развитие структуры способствует подготовки и реализации форм развития.',
            time: '23 мая 2025',
            src: '/image/16.png'
        },
        {
            id: 3,
            title: 'ВАКАНСИИ',
            discription: 'Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития.',
            time: '21 мая 2025',
            src: '/image/17.png'
        },
    ]

  return (
    <div className='w-full mt-10' id="2">
        <h1 className='font-semibold text-[40px] text-[#1E4DC2] uppercase text-center'>Открывая горизонты: Новые разработки и успехи</h1>
        <div className="mt-10">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
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