

const ProductCard = ({data}) => {

    return(<>
        <section className="overflow-hidden rounded-lg shadow-lg w-full h-[350px]">

            <span href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
            </span>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline hover:underline text-black" href="#">
                        {data.title}
                    </span>
                </h1>

            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <span className="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                    <p className="ml-2 text-sm">
                        Author Name
                    </p>
                </span>
                <span className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                </span>
            </footer>

        </section>
    </>)
}

export default ProductCard;