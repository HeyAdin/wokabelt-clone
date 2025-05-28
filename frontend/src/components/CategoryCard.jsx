export function CategoryCard({ cards }) {
    return <div className="flex gap-5 ">
        {cards.map((card) => {
            return <div className="text-center flex flex-col justify-center items-center shadow-md h-25 w-90 cursor-pointer transform hover:-translate-y-1 duration-300 hover:shadow-lg rounded-sm ">
                <div className="">{card.icon}</div>
                <div className="">{card.categoryName}</div>
            </div>
        })}
    </div>
}