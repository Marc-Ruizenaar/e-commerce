import { updateSubtotal, getProductDetails } from './displayCart';

jest.mock('./displayCart', () => {
  return {
    updateSubtotal: jest.fn(),
    getProductDetails: jest.fn((id) => {
      const productDetails = {
        "1": { price: 99.99 },
        "2": { price: 32.26 }
      };
      return productDetails[id] || null;
    })
  };
});

describe('updateSubtotal function', () => {
  it('should calculate the correct total amount', () => {
    const cartItems = [
      {
        "id": "2",
        "quantity": 1
      },
      {
        "id": "1",
        "quantity": 1
      }
    ];

    // Create a mock DOM element
    document.body.innerHTML = `<div id="subtotalPrice"></div>`;

    // Call the function
    updateSubtotal(cartItems);

    // Get the subtotal element
    const subtotalElement = document.getElementById('subtotalPrice');

    // Check if the subtotal is correctly calculated
    expect(subtotalElement.textContent).toBe('$132.25');
  });
});