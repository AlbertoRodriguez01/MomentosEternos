import { useNavigate } from "react-router-dom";

// productData 
const productData = [
    {
        id: 1,
        image: 'src/assets/img/ramos/1.jpg',
        title: 'Tulipan amarillo crochet',
        desc: 'Tulipan amarillo tejido a mano con estambre.',
        price: 200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'src/assets/img/ramos/2.jpg',
        title: 'Ramo de tulipanes crochet',
        desc: 'Ramo de tulipanes tejidos a mano.',
        price: 250,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'src/assets/img/ramos/3.jpg',
        title: 'Ramo de Hello Kitty',
        desc: 'Ramo de 50 rosas de liston con forma de Hello Kitty',
        price: 350,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'src/assets/img/ramos/4.jpg',
        title: 'Ramo de Dragon Ball',
        desc: 'Ramo de 50 rosas con diseño de Dragon Ball',
        price: 350,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'src/assets/img/munecos/9.jpg',
        title: 'Muñeco de Goku',
        desc: 'Muñeco de Goku de Dragon Ball tejido a mano.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'src/assets/img/munecos/15.jpg',
        title: 'Muñeco de Batman',
        desc: 'Muñeco de Batman tejido a mano.',
        price: 100,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'src/assets/img/munecos/8.jpg',
        title: 'Muñeco de Spiderman',
        desc: 'Muñeco de Spiderman tejido a mano.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'src/assets/img/munecos/16.jpg',
        title: 'Going Merry One Piece',
        desc: 'Barco del anime One Piece tejido a mano.',
        price: 300,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const HomePageProductCard = () => {

    const navigate = useNavigate()

    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Productos populares</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate('/nopage')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Momentos Eternos
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ${price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Añadir al carrito
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;