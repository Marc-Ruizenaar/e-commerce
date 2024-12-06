// TEST TO VALIDATE CALCULATING FUNCTIONS

// HOW TO IMPORT CORRECTLY?

// import { updateSubtotal } from './your-file-path';
// import * as productModule from './product-module-path';

// describe('updateSubtotal', () => {
//     let mockGetProductDetails;
//     let mockDocument;
  
//     beforeEach(() => {
//       mockGetProductDetails = jest.spyOn(productModule, 'getProductDetails');
//       mockDocument = {
//         getElementById: jest.fn(() => ({
//           textContent: '',
//         })),
//       };
//       global.document = mockDocument;
//     });
  
//     afterEach(() => {
//       jest.restoreAllMocks();
//     });
  
//     it('calculates subtotal correctly and updates DOM', () => {
//       const cartItems = [
//         { id: 1, quantity: 2 },
//         { id: 2, quantity: 1 },
//       ];
  
//       mockGetProductDetails.mockImplementation((id) => {
//         if (id === 1) return { price: 10 };
//         if (id === 2) return { price: 15 };
//         return null;
//       });
  
//       updateSubtotal(cartItems);
  
//       expect(mockGetProductDetails).toHaveBeenCalledTimes(2);
//       expect(mockGetProductDetails).toHaveBeenCalledWith(1);
//       expect(mockGetProductDetails).toHaveBeenCalledWith(2);
  
//       const subtotalElement = mockDocument.getElementById('subtotalPrice');
//       expect(mockDocument.getElementById).toHaveBeenCalledWith('subtotalPrice');
//       expect(subtotalElement.textContent).toBe('$35.00');
//     });
  
//     it('handles empty cart', () => {
//       updateSubtotal([]);
  
//       const subtotalElement = mockDocument.getElementById('subtotalPrice');
//       expect(subtotalElement.textContent).toBe('$0.00');
//     });
  
//     it('handles missing product details', () => {
//       const cartItems = [{ id: 3, quantity: 1 }];
//       mockGetProductDetails.mockReturnValue(null);
  
//       updateSubtotal(cartItems);
  
//       const subtotalElement = mockDocument.getElementById('subtotalPrice');
//       expect(subtotalElement.textContent).toBe('$0.00');
//     });
//   });

// test("what are we testing", () => {
//     expect(what do we expect).toEqual(expected result);
// })