const category = [
    {
        image: 'src/assets/img/icon1.jpg',
        name: 'Ramos Eternos'
    },
    {
        image: 'src/assets/img/icon2.jpg',
        name: 'Amigurumis'
    }
]

const Category = () => {

    return(
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 flex items-center justify-center">
                                        <img src={item.image} alt="img" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <h1 className="text-sm lg:text-lg text-center font-medium title-font text-black first-letter:uppercase">{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar { display: none;}" }} />
        </div>
    )
}

export default Category;