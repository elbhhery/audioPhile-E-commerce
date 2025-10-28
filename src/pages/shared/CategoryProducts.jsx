import { Link } from "react-router-dom";
import ProductsData from "../../assets/data/data.json";
import "../../styles/global.css";
function productList() {}
export default function CategoryProducts({ category }) {
  return (
    <div className="my-container px-6 text-center md:px-0 ">
      {ProductsData.filter((products) => products.category === category).map(
        (product, index) => {
          return (
            <div
              className={`mx-auto mt-12 lg:flex lg:gap-32 lg:text-left ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              key={product.id}
            >
              <img
                src={product.image?.mobile}
                alt={product.name}
                className="w-[20rem] block mx-auto mb-8 md:w-full rounded-2xl"
              />
              <div>
                {" "}
                {index === 0 && (
                  <p className="uppercase tracking-[8px] leading-1 text-[#D87D4A] m-4 lg:mt-4 lg:m-0">
                    New Product
                  </p>
                )}
                <h2 className="text-3xl font-bold my-6 md:text-4xl">
                  {(() => {
                    const words = product.name.split(" ");
                    if (words.length > 1) {
                      return (
                        <>
                          {words.slice(0, -1).join(" ")}
                          <br />
                          {words[words.length - 1]}
                        </>
                      );
                    }
                    return product.name;
                  })()}
                </h2>
                <p className="p-4 lg:p-0 opacity-60">{product.description}</p>
                <Link
                  to={`/product/${product.slug}`}
                  className="inline-block mt-6 py-4 px-6 bg-[#D87D4A] text-white uppercase hover:bg-[#FBAF85]"
                >
                  see product
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
