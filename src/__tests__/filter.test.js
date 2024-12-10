import { productFilter } from '../scripts/filters/productFilter';
import { getProductsFromApi } from '../scripts/api/getProductsFromApi';

// Mock the getProductsFromApi function
jest.mock('../scripts/api/getProductsFromApi');

describe('productFilter', () => {
    let mockButtons;
    let mockDocument;
  
    beforeEach(() => {
      // Reset mocks
      jest.clearAllMocks();
  
      // Create mock buttons with spies for addEventListener
      mockButtons = [
        { 
          id: 'allproducts', 
          addEventListener: jest.fn((event, callback) => {
            if (event === 'click') {
              this.clickCallback = callback;
            }
          })
        },
        { 
          id: "women's%20clothing", 
          addEventListener: jest.fn((event, callback) => {
            if (event === 'click') {
              this.clickCallback = callback;
            }
          })
        },
        { 
          id: "men's%20clothing", 
          addEventListener: jest.fn((event, callback) => {
            if (event === 'click') {
              this.clickCallback = callback;
            }
          })
        },
        { 
          id: 'jewelery', 
          addEventListener: jest.fn((event, callback) => {
            if (event === 'click') {
              this.clickCallback = callback;
            }
          })
        },
        { 
          id: 'electronics', 
          addEventListener: jest.fn((event, callback) => {
            if (event === 'click') {
              this.clickCallback = callback;
            }
          })
        }
      ];
  
      // Mock document.querySelectorAll to return our mock buttons
      mockDocument = {
        querySelectorAll: jest.fn().mockReturnValue(mockButtons)
      };
  
      // Replace global document with mock
      global.document = mockDocument;
    });
  
    it('should add click event listeners to all category buttons', () => {
      productFilter();
  
      // Check that addEventListener was called for each button with 'click' event
      mockButtons.forEach(button => {
        expect(button.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
      });
    });
  
    it('should call getProductsFromApi with "products" when "ALL PRODUCTS" button is clicked', () => {
      productFilter();
  
      // Find the "ALL PRODUCTS" button and simulate a click
      const allProductsButton = mockButtons.find(btn => btn.id === 'allproducts');
      
      // Simulate the click by calling the click handler directly
      allProductsButton.addEventListener.mock.calls[0][1]();
  
      // Verify getProductsFromApi was called with the correct URL
      expect(getProductsFromApi).toHaveBeenCalledWith('products');
    });
  
    it('should call getProductsFromApi with correct category URL when a specific category button is clicked', () => {
      productFilter();
  
      // Test each category button
      const categoryTests = [
        { 
          buttonId: "women's%20clothing", 
          expectedUrl: "products/category/women's%20clothing" 
        },
        { 
          buttonId: "men's%20clothing", 
          expectedUrl: "products/category/men's%20clothing" 
        },
        { 
          buttonId: 'jewelery', 
          expectedUrl: 'products/category/jewelery' 
        },
        { 
          buttonId: 'electronics', 
          expectedUrl: 'products/category/electronics' 
        }
      ];
  
      categoryTests.forEach(({ buttonId, expectedUrl }) => {
        // Reset the mock before each test
        jest.clearAllMocks();
  
        // Find the specific category button
        const categoryButton = mockButtons.find(btn => btn.id === buttonId);
        
        // Simulate the click by calling the click handler directly
        categoryButton.addEventListener.mock.calls[0][1]();
  
        // Verify getProductsFromApi was called with the correct category URL
        expect(getProductsFromApi).toHaveBeenCalledWith(expectedUrl);
      });
    });
  });