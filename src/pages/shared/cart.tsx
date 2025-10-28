import { useEffect, useState } from "react";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { AnimatePresence, motion } from "framer-motion";
import priceFormat from "../../utils/priceFormat";
import {
  loadCart,
  removeAll,
  updateQuantity,
  getCartTotal,
} from "../../utils/loadCart";
import { Link } from "react-router-dom";

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  categoryImage?: { mobile: string };
};

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const handleQuantityChange = (id: string | number, delta: number) => {
    const updated = updateQuantity(id, delta);
    setCart(updated);
  };
  const handleRemoveAll = () => {
    setCart(removeAll());
  };
  getCartTotal();
  useEffect(() => {
    const updateCart = () => setCart(loadCart());

    updateCart();
    if (cartOpen) updateCart();

    window.addEventListener("cartUpdated", updateCart);
    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, [cartOpen]);

  return (
    <div className="relative">
      <button
        aria-label="Open cart"
        className="p-1"
        onClick={() => setCartOpen(!cartOpen)}
      >
        <img src={CartIcon} alt="" className="h-6" />
      </button>
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-[350px] absolute z-20 text-black bg-white py-4 px-4 right-5 top-20 rounded-lg border border-gray-300"
            >
              <div className="flex justify-between mb-8">
                <h4 className="uppercase font-bold">Cart ({cart.length})</h4>
                <button
                  onClick={handleRemoveAll}
                  className="underline opacity-60 hover:opacity-100"
                >
                  Remove all
                </button>
              </div>

              {cart.length === 0 ? (
                <h3 className="text-center text-gray-500">
                  Your Cart Is Empty
                </h3>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center pb-2"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.categoryImage?.mobile.replace(".", "")}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h5 className="font-semibold text-sm">
                              {item.name}
                            </h5>
                            <span className="text-gray-500 text-sm">
                              {priceFormat(item.price)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
                          <button
                            onClick={() => {
                              handleQuantityChange(item.id, -1);
                              setCart(loadCart());
                            }}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              handleQuantityChange(item.id, 1);
                              setCart(loadCart());
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <span className="uppercase text-gray-500 text-sm ">
                      Total
                    </span>
                    <span className="font-bold text-lg">
                      {priceFormat(getCartTotal())}
                    </span>
                  </div>

                  <Link
                    to="/Checkout"
                    className="mt-4 inline-block text-center w-full py-3 bg-[#D87D4A] text-white! font-bold rounded hover:bg-[#FBAF85]"
                  >
                    Checkout
                  </Link>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
