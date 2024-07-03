export const fetchFoodData = async () => {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch food list");
  }
  return data;
};

export const postOrderForm = async (items, customer) => {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order: { items, customer } }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to post order form");
  }
  return data;
};
