import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import priceFormat from "../../utils/priceFormat";
import productsData from "../../assets/data/data.json";
import CategoryHeader from "./categoryHeader";
import { loadCart } from "../../utils/loadCart";
// css files
import "../../styles/global.css";
import Category from "./category";
import Thumbnail from "./thumbnail";
import Footer from "./footer";
interface CartItem {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  features: string;
  quantity: number;
}
export default function ProductPage() {
  // quantity state
  const [quantity, setQuantity] = useState(1);

  // cart
  const handleAddToCart = (product?: Omit<CartItem, "quantity"> | CartItem) => {
    if (!product) return;
    const cartString = localStorage.getItem("cart");
    const existingCart: CartItem[] = cartString ? JSON.parse(cartString) : [];

    const existingItem = existingCart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({
        ...(product as Omit<CartItem, "quantity">),
        quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    loadCart();
    setQuantity(1);
  };
  // vars
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  // api

  return (
    <>
      <CategoryHeader />
      <div className="my-container px-6 md:px-0 mt-6!">
        <button className="pl-4" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="mt-8 md:flex md:flex-row md:items-center md:text-left md:gap-16">
          <div>
            <picture>
              <source
                media="(max-width:768px)"
                srcSet={product?.image?.mobile.replace(".", "")}
              />
              <source
                media="(max-width:1040px)"
                srcSet={product?.image?.tablet.replace(".", "")}
              />
              <source
                media="(min-width:1041px)"
                srcSet={product?.image?.desktop.replace(".", "")}
              />
              <img
                src={product?.image?.desktop.replace(".", "")}
                alt="YX1 Earphones"
                className="rounded-lg w-full object-cover"
              />
            </picture>
          </div>

          <div>
            <h2 className="text-3xl font-bold my-8 md:text-4xl">
              {product
                ? (() => {
                    const words =
                      product && product.name ? product.name.split(" ") : [];
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
                  })()
                : "Product Not Found"}
            </h2>
            <p className="opacity-70 pr-6 md:pr-0">{product?.description}</p>
            <span className="text-2xl font-bold mt-6 block">
              {product && typeof product.price === "number"
                ? priceFormat(product.price)
                : "Price Not Available"}
            </span>
            <div className="md:flex mt-6 flex-row gap-4">
              <span className="py-4 px-8 bg-[#F1F1F1] mt-4 flex gap-6">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </span>
              <button
                onClick={() => {
                  if (product && typeof product.id === "number") {
                    // Ensure product matches CartItem or Omit<CartItem, "quantity">
                    const cartProduct: Omit<CartItem, "quantity"> = {
                      id: product.id,
                      slug: product.slug,
                      name: product.name,
                      image: product.image,
                      category: product.category,
                      categoryImage: product.categoryImage,
                      new: product.new,
                      price: product.price,
                      features: product.features,
                    };
                    handleAddToCart(cartProduct);
                  }
                }}
                className="py-4 px-8 text-white bg-[#D87D4A] hover:bg-[#FBAF85] mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24! md:flex md:gap-32 md:flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h2 className="uppercase text-3xl font-bold tracking-wide">
              features
            </h2>
            <p className="mt-8 opacity-70 leading-relaxed">
              {product?.features}
            </p>
          </div>

          <div className="mt-12 md:mt-0 w-full lg:w-1/2 md:flex md:gap-48 lg:flex-col lg:gap-8">
            <h2 className="uppercase text-3xl font-bold tracking-wide">
              in the box
            </h2>
            <ul className="mt-8 md:mt-0 space-y-3">
              {product?.includes?.map((include, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="font-bold text-[#D87D4A] mr-4">
                    {include.quantity}x
                  </span>
                  <span className="opacity-70">{include.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 mb-6 text-center ">
          <h2 className="text-3xl mb-12 font-bold uppercase">gallery</h2>
          <div className="md:flex md:flex-row gap-6">
            <div className="md:flex md:flex-col justify-between">
              {product?.gallery?.first && (
                <div>
                  <picture>
                    <source
                      media="(max-width:768px)"
                      srcSet={product.gallery.first.mobile.replace(".", "")}
                    />
                    <source
                      media="(max-width:1040px)"
                      srcSet={product.gallery.first.tablet.replace(".", "")}
                    />
                    <source
                      media="(min-width:1041px)"
                      srcSet={product.gallery.first.desktop.replace(".", "")}
                    />
                    <img
                      src={product.gallery.first.desktop.replace(".", "")}
                      alt=""
                      className="rounded-lg"
                    />
                  </picture>
                </div>
              )}
              {product?.gallery?.second && (
                <div className="my-4 md:my-0">
                  <picture>
                    <source
                      media="(max-width:768px)"
                      srcSet={product.gallery.second.mobile.replace(".", "")}
                    />
                    <source
                      media="(max-width:1040px)"
                      srcSet={product.gallery.second.tablet.replace(".", "")}
                    />
                    <source
                      media="(min-width:1041px)"
                      srcSet={product.gallery.second.desktop.replace(".", "")}
                    />
                    <img
                      src={product.gallery.second.desktop.replace(".", "")}
                      alt=""
                      className="rounded-lg"
                    />
                  </picture>
                </div>
              )}
            </div>
            {product?.gallery?.third && (
              <div className="md:flex md:gap-4">
                <picture>
                  <source
                    media="(max-width:768px)"
                    srcSet={product.gallery.third.mobile.replace(".", "")}
                  />
                  <source
                    media="(max-width:1040px)"
                    srcSet={product.gallery.third.tablet.replace(".", "")}
                  />
                  <source
                    media="(min-width:1041px)"
                    srcSet={product.gallery.third.desktop.replace(".", "")}
                  />
                  <img
                    src={product.gallery.third.desktop.replace(".", "")}
                    alt=""
                    className="rounded-lg"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center space-y-12">
          <h2 className="uppercase text-3xl font-bold">you may also like</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {product?.others?.map((other, idx) => (
              <div key={idx} className="">
                <picture>
                  <source
                    media="(max-width:768px)"
                    srcSet={other.image.desktop.replace(".", "")}
                  />
                  <source
                    media="(max-width:1040px)"
                    srcSet={other.image.tablet.replace(".", "")}
                  />
                  <source
                    media="(min-width:1041px)"
                    srcSet={other.image.mobile.replace(".", "")}
                  />
                </picture>
                <img
                  src={other.image.desktop.replace(".", "")}
                  alt=""
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-semibold my-8">{other.name}</h3>
                <Link
                  to={`/product/${other.slug}`}
                  className="inline-block px-6 py-4 bg-[#D87D4A] text-white uppercase hover:bg-[#FBAF85]"
                >
                  see product
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Category />
        <Thumbnail />
      </div>
      <Footer />
    </>
  );
}
