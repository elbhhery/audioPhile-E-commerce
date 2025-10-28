import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryHeader from "../shared/categoryHeader";
import Footer from "../shared/footer";
import "../../styles/global.css";
import priceFormat from "../../utils/priceFormat";
import { loadCart, removeAll } from "../../utils/loadCart";
import order from "../../assets/checkout/icon-order-confirmation.svg";
import { AnimatePresence, motion } from "framer-motion";
export default function Checkout() {
  interface CartItem {
    id: number;
    name: string;
    slug: string;
    price: number;
    quantity: number;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentCart = [...cart];
    setCart(currentCart);

    setShowPopup(true);
    removeAll();
  };

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = loadCart();
    setCart(storedCart);
  }, []);

  return (
    <>
      <CategoryHeader />
      <div className="my-container py-12 px-4 md:px-0 relative">
        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-[#00000087] z-50">
            <AnimatePresence>
              <motion.div
                className="fixed inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="p-6 w-[327px] md:w-[540px] border-2 rounded-2xl border-gray-300 bg-white z-50"
              >
                {cart.length > 0 ? (
                  <div>
                    <img src={order} alt="" />
                    <h3 className="text-3xl font-bold my-4 uppercase">
                      thank you <br /> for your order
                    </h3>
                    <p className="opacity-70">
                      you will receive an email confirmation shortly
                    </p>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 my-2"
                      >
                        <img
                          src={item.image?.mobile.replace(".", "")}
                          alt={item.name}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-gray-500 text-sm">
                            x{item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-between items-center mt-4  pt-4">
                      <span className="text-gray-500 uppercase text-sm">
                        Grand Total
                      </span>
                      <span className="font-bold">
                        {priceFormat(
                          cart.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )
                        )}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {" "}
                    <h3 className="text-3xl font-bold my-4 uppercase leading-12">
                      oops! you didn't
                      <br /> order anything
                    </h3>
                    <p className="text-center text-gray-600 mt-4">
                      Your cart is empty — please add some products before
                      checkout.
                    </p>
                  </>
                )}

                <Link
                  to="/"
                  className="text-center bg-[#D87D4A] hover:bg-[#FBAF85] py-4 rounded-md text-white block mt-6 uppercase"
                >
                  back to home
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="text-sm opacity-70 hover:opacity-100"
        >
          Go Back
        </button>

        <div className="mt-8"></div>
        <h3 className="uppercase text-3xl font-bold">checkout</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col md:flex-row justify-between gap-6 items-center md:items-start"
        >
          <div className="space-y-8 w-auto lg:w-[589px]!">
            <div>
              <h4 className="uppercase text-[#D87D4A] font-semibold mb-4">
                billing details
              </h4>
              <div className="grid gap-4">
                <label className="block">
                  <span className="uppercase font-bold">Name</span>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-md placeholder:opacity-70  border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                    placeholder="Alexei Ward"
                    type="text"
                  />
                </label>

                <label className="block">
                  <span className="uppercase font-bold">Email Address</span>
                  <input
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 placeholder:opacity-70  border-gray-300 border-2 rounded-md focus:outline-none focus:border-[#D87D4A]"
                    placeholder="alexei@mail.com"
                    type="email"
                  />
                </label>

                <label className="block">
                  <span className="uppercase font-bold">Phone Number</span>
                  <input
                    name="phone"
                    required
                    onChange={handleChange}
                    value={form.phone}
                    className="w-full mt-2 p-3 rounded-md placeholder:opacity-70 border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                    placeholder="+1 202-555-0136"
                    type="tel"
                  />
                </label>
              </div>
            </div>

            <div>
              <h4 className="uppercase text-[#D87D4A] font-semibold mb-4">
                shipping info
              </h4>
              <div className="grid gap-4">
                <label className="block md:col-span-2">
                  <span className="uppercase font-bold">Your Address</span>
                  <input
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-md placeholder:opacity-70 border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                    placeholder="1137 Williams Avenue"
                    type="text"
                  />
                </label>

                <div className="grid grid-cols-3 gap-4">
                  <label className="block col-span-1">
                    <span className="text-sm uppercase opacity-70">
                      ZIP Code
                    </span>
                    <input
                      name="zip"
                      required
                      value={form.zip}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 placeholder:opacity-70 border-gray-300 border-2 rounded-md focus:outline-none focus:border-[#D87D4A]"
                      placeholder="10001"
                      type="text"
                    />
                  </label>

                  <label className="block col-span-1">
                    <span className="text-sm uppercase opacity-70">City</span>
                    <input
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-md placeholder:opacity-70 border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                      placeholder="New York"
                      type="text"
                    />
                  </label>

                  <label className="block col-span-1">
                    <span className="text-sm uppercase opacity-70">
                      Country
                    </span>
                    <input
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 placeholder:opacity-70 border-gray-300 border-2 rounded-md focus:outline-none focus:border-[#D87D4A]"
                      placeholder="United States"
                      type="text"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="uppercase text-[#D87D4A] font-semibold mb-4">
                payment details
              </h4>

              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="e-money"
                      checked={form.payment === "e-money"}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, payment: e.target.value }))
                      }
                    />
                    <span className="uppercase font-medium">e-Money</span>
                  </label>

                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={form.payment === "cash"}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, payment: e.target.value }))
                      }
                    />
                    <span className="uppercase font-medium">
                      Cash on Delivery
                    </span>
                  </label>
                </div>

                {form.payment === "e-money" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <label>
                      <span className="text-sm uppercase opacity-70">
                        e-Money Number
                      </span>
                      <input
                        name="eMoneyNumber"
                        required
                        value={form.eMoneyNumber}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-md placeholder:opacity-70 border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                        placeholder="238521993"
                        type="text"
                      />
                    </label>

                    <label>
                      <span className="text-sm uppercase opacity-70">
                        e-Money PIN
                      </span>
                      <input
                        name="eMoneyPin"
                        required
                        value={form.eMoneyPin}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-md placeholder:opacity-70 border-gray-300 border-2 focus:outline-none focus:border-[#D87D4A]"
                        placeholder="6891"
                        type="password"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="space-y-6 w-auto lg:w-[489px]">
            <div className="p-6 rounded-lg">
              <h4 className="uppercase text-black text-lg font-bold">
                order summary
              </h4>

              {cart.length > 0 ? (
                <div className="mt-8 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mb-6 pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image?.mobile.replace(".", "")}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-sm">{item.name}</h5>
                          <span className="text-gray-500 text-sm">
                            {priceFormat(item.price)}
                          </span>
                        </div>
                      </div>
                      <span className="font-semibold">x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mt-4">Your cart is empty</p>
              )}
              <div className="flex justify-between items-center mt-6">
                <span className="uppercase text-gray-500 text-sm">
                  SUBTotal
                </span>
                <span className="font-bold text-lg">
                  {priceFormat(
                    cart.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    )
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase font-semibold rounded-md"
            >
              Continue & Pay
            </button>
          </aside>
        </form>
      </div>

      <Footer />
    </>
  );
}
