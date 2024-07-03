export const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (existingIndex > -1) {
      const existing = state.items[existingIndex];
      const updatedItem = {
        ...existing,
        quantity: existing.quantity + 1,
      };
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedItems = [...state.items];
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existing = state.items[existingIndex];
    if (existing.quantity === 1) {
      updatedItems.splice(existingIndex, 1);
    } else {
      const updatedItem = {
        ...existing,
        quantity: existing.quantity - 1,
      };
      updatedItems[existingIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
};
