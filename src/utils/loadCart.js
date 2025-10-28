export function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = loadCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
  return cart;
}

export function updateQuantity(id, delta) {
  const cart = loadCart();
  const item = cart.find((p) => p.id === id);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
  }
  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
  return cart;
}

export function removeAll() {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
  return [];
}

export function getCartTotal() {
  const cart = loadCart();
  return cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
}
