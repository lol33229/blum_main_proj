import Item from "./components/Item"
type Props = {}

export default function Advantage({}: Props) {
    const items = [
        {
            id: 1,
            title: 'НЕПРЕРЫВНОЕ РАЗВИТИЕ',
            discription: 'Обеспечивает постоянный поток новых идей и предложений.',
            src: '/public/image/7.png'
        },
        {
            id: 2,
            title: 'ГИБКАЯ МОБИЛЬНОСТЬ',
            discription: 'Позволяет компаниям адаптироваться к изменениям рынка и потребностей клиентов.',
            src: '/public/image/8.png'
        },
        {
            id: 3,
            title: 'ПОВЫШЕНИЕ МОТИВАЦИИ',
            discription: 'Платформа позволяет каждому сотруднику видеть результаты своих предложений.',
            src: '/public/image/9.png'
        },
        {
            id: 4,
            title: 'ОПТИМИЗАЦИЯ  ПРОЦЕССОВ',
            discription: 'Помогает выявлять и устранять проблемы на ранних стадиях.',
            src: '/public/image/10.png'
        },
    ]

  return (
    <div className='w-full mt-10' id="3">
        <h1 className='font-semibold text-[40px] text-[#1E4DC2] uppercase text-center'>ПРЕИМУЩЕСТВА</h1>
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