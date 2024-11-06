import { useNavigate } from "react-router-dom";

// productData 
const productData = [
    {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/ramos%2F1.jpg?alt=media&token=fd97356e-8638-4075-9691-f86031fcaccc',
        title: 'Tulipan amarillo crochet',
        desc: 'Tulipan amarillo tejido a mano con estambre.',
        price: 200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/ramos%2F2.jpg?alt=media&token=4c2b80ea-bcdf-41d7-8721-7426dd4ed420',
        title: 'Ramo de tulipanes crochet',
        desc: 'Ramo de tulipanes tejidos a mano.',
        price: 250,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/ramos%2F3.jpg?alt=media&token=cb27efa6-837d-49f4-afbc-3afd6d9e563d',
        title: 'Ramo de Hello Kitty',
        desc: 'Ramo de 50 rosas de liston con forma de Hello Kitty',
        price: 350,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/ramos%2F4.jpg?alt=media&token=6899bd77-f3fa-4eec-9f55-0a053fec8285',
        title: 'Ramo de Dragon Ball',
        desc: 'Ramo de 50 rosas con diseño de Dragon Ball',
        price: 350,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/munecos%2F9.jpg?alt=media&token=3778795e-9ebc-43f6-b125-303fafc05a05',
        title: 'Muñeco de Goku',
        desc: 'Muñeco de Goku de Dragon Ball tejido a mano.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/munecos%2F15.jpg?alt=media&token=8452543d-fb0c-445b-928f-53e0ee0f41c5',
        title: 'Muñeco de Batman',
        desc: 'Muñeco de Batman tejido a mano.',
        price: 100,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/munecos%2F8.jpg?alt=media&token=78a05213-10d7-43c8-83c9-cec55937bcbc',
        title: 'Muñeco de Spiderman',
        desc: 'Muñeco de Spiderman tejido a mano.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/momentos-eternos-5e14f.appspot.com/o/munecos%2F16.jpg?alt=media&token=7b0c9d30-1833-4c76-a179-adc6525aea75',
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
