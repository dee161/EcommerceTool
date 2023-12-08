// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;
  
//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });
  
//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });
  
//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
  
//           // Log the structure of product data for debugging
//           console.log('Product Data:', fullProducts);
  
//           const uniqueCategories = Array.from(
//             new Set(
//               fullProducts.flatMap((product) => {
//                 const categories =
//                 product.masterData &&
//                 product.masterData.current &&
//                 product.masterData.current.categories;
              
//               // Extract only the category names
//               const categoryNames = categories?.map((category) => category.id);
              
//               console.log('Categories for product', product.id, ':', categoryNames);
              
//               return categoryNames || [];
//               })
//             )
//           );
  
//           // Add console log to inspect unique categories
//           console.log('Unique Categories:', uniqueCategories);
  
//           setCategories(['All', ...uniqueCategories]);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//   // Apply category filter
//   if (selectedCategory === 'All') {
//     setFilteredProducts(products);
//   } else {
//     const filtered = products.filter((product) => {
//       const currentCategories = product.masterData?.current?.categories;
//       console.log('Current Categories:', currentCategories);

//       // Check if currentCategories is an array and includes the selected category
//       return (
//         Array.isArray(currentCategories) &&
//         currentCategories.some((category) => category.id === selectedCategory)
//       );
//     });
//     setFilteredProducts(filtered);
//   }
// }, [selectedCategory, products]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Category:', selectedValue);
//     setSelectedCategory(selectedValue);
//   };

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Category filter */}
//       <label>
//   Select Category:
//   <select value={selectedCategory} onChange={handleCategoryChange}>
//     {categories.map((category) => (
//       <option key={category} value={category}>
//         {category}
//       </option>
//     ))}
//   </select>
// </label>

//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (categoryResponse.data.results) {
//           const categoryData = categoryResponse.data.results.map((category) => category);

//           // Set categories for the dropdown
//           setCategories(['All', ...categoryData.map((category) => category.key)]);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Apply category filter
//     if (selectedCategory === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((product) => {
//         const currentCategories = product.masterData?.current?.categories;

//         // Check if currentCategories is an array and has at least one category with the selected key
//         return (
//           Array.isArray(currentCategories) &&
//           currentCategories.some((category) => category && category.key === selectedCategory)
//         );
//       });
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory, products]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Category:', selectedValue);
//     setSelectedCategory(selectedValue);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer ixOsj4GdPPcj8xw4Cg5ux3by_eaDlLGj',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Category filter */}
//       <label>
//         Select Category:
//         <select value={selectedCategory} onChange={handleCategoryChange}>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (categoryResponse.data.results) {
//           const categoryData = categoryResponse.data.results.map((category) => category);

//           // Set categories for the dropdown
//           setCategories(['All', ...categoryData.map((category) => category.key)]);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Apply category filter
//     if (selectedCategory === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((product) => {
//         const currentCategories = product.masterData?.current?.categories;

//         // Check if currentCategories is an array and has at least one category with the selected key
//         return (
//           Array.isArray(currentCategories) &&
//           currentCategories.some((category) => category && category.key === selectedCategory)
//         );
//       });
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory, products]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Category:', selectedValue);
//     setSelectedCategory(selectedValue);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Category filter */}
//       <label>
//         Select Category:
//         <select value={selectedCategory} onChange={handleCategoryChange}>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [categoryKeyToIdMap, setCategoryKeyToIdMap] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });
//        console.log(categoryResponse);
//         if (categoryResponse.data.results) {
//           const categoryData = categoryResponse.data.results.map((category) => category);

//           // Create a mapping between category keys and IDs
//           const keyToIdMap = {};
//           categoryData.forEach((category) => {
//             keyToIdMap[category.key] = category.id;
//           });

//           // Filter out subcategories and set categories for the dropdown
//       const mainCategories = categoryData.filter(category => !category.parent);
//       setCategories(['All', ...mainCategories.map(category => category.key)]);
//       setCategoryKeyToIdMap(keyToIdMap);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Apply category filter
//     if (selectedCategory === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const categoryId = categoryKeyToIdMap[selectedCategory];
//       const filtered = products.filter((product) => {
//         const currentCategories = product.masterData?.current?.categories;

//         // Check if currentCategories is an array and has at least one category with the selected id
//         return (
//           Array.isArray(currentCategories) &&
//           currentCategories.some((category) => category && category.id === categoryId)
//         );
//       });
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory, products, categoryKeyToIdMap]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Category Key:', selectedValue);
//     setSelectedCategory(selectedValue);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);
//   return (
//         <div>
//           <h1>Product List</h1>
    
//           {/* Category filter */}
//           <label>
//             Select Category:
//             <select value={selectedCategory} onChange={handleCategoryChange}>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </label>
    
//           {/* Display filtered products */}
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="product-grid">
//               {filteredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     };
    
//     export default Product;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [subcategories, setSubcategories] = useState([]);
//   const [selectedSubcategory, setSelectedSubcategory] = useState('All');
//   const [categoryKeyToIdMap, setCategoryKeyToIdMap] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Define 'region' and 'projectKey'
//   const region = 'eu-central-1';
//   const projectKey = '12345678';

//   useEffect(() => {
//     // Fetch categories
//     const fetchCategories = async () => {
//       try {
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (categoryResponse.data.results) {
//           const categoryData = categoryResponse.data.results.map((category) => category);

//           // Create a mapping between category keys and IDs
//           const keyToIdMap = {};
//           categoryData.forEach((category) => {
//             keyToIdMap[category.key] = category.id;
//           });

//           // Filter out subcategories and set categories for the dropdown
//           const mainCategories = categoryData.filter(category => !category.parent);
//           setCategories(['All', ...mainCategories.map(category => category.key)]);
//           setCategoryKeyToIdMap(keyToIdMap);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Fetch subcategories based on the selected main category
//     const fetchSubcategories = async () => {
//       try {
//         if (selectedCategory !== 'All') {
//           const categoryId = categoryKeyToIdMap[selectedCategory];
//           const subcategoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories?where=parent.id="${categoryId}"`;

//           const subcategoryResponse = await axios.get(subcategoryApiUrl, {
//             headers: {
//               'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//               'Content-Type': 'application/json',
//             },
//           });

//           if (subcategoryResponse.data.results) {
//             const subcategoryData = subcategoryResponse.data.results
//               .map(subcategory => subcategory.key);

//             setSubcategories(['All', ...subcategoryData]);
//           } else {
//             console.log('No subcategory data returned from the API.');
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching subcategory data:', error);
//         setError(error.message || 'An error occurred while fetching subcategory data.');
//       }
//     };

//     fetchSubcategories();
//   }, [selectedCategory, categoryKeyToIdMap]);

//   useEffect(() => {
//     // Fetch products
//     const fetchProducts = async () => {
//       try {
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     // Apply category and subcategory filters
//     if (selectedCategory === 'All' && selectedSubcategory === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const categoryFilter = selectedCategory !== 'All'
//         ? (product) => {
//             const categoryId = categoryKeyToIdMap[selectedCategory];
//             const currentCategories = product.masterData?.current?.categories;
//             return (
//               Array.isArray(currentCategories) &&
//               currentCategories.some((category) => category && category.id === categoryId)
//             );
//           }
//         : () => true;

//       const subcategoryFilter = selectedSubcategory !== 'All'
//         ? (product) => {
//             const subcategoryId = categoryKeyToIdMap[selectedSubcategory];
//             const currentCategories = product.masterData?.current?.categories;
//             return (
//               Array.isArray(currentCategories) &&
//               currentCategories.some((category) => category && category.id === subcategoryId)
//             );
//           }
//         : () => true;

//       const filtered = products.filter((product) => categoryFilter(product) && subcategoryFilter(product));
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory, selectedSubcategory, products, categoryKeyToIdMap]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Main Category Key:', selectedValue);
//     setSelectedCategory(selectedValue);
//     setSelectedSubcategory('All'); // Reset subcategory when the main category changes
//   };

//   const handleSubcategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log('Selected Subcategory Key:', selectedValue);
//     setSelectedSubcategory(selectedValue);
//   };

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Main Category filter */}
//       <label>
//         Select Main Category:
//         <select value={selectedCategory} onChange={handleCategoryChange}>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Subcategory filter */}
//       {selectedCategory !== 'All' && (
//         <label>
//           Select Subcategory:
//           <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
//             {subcategories.map((subcategory) => (
//               <option key={subcategory} value={subcategory}>
//                 {subcategory}
//               </option>
//             ))}
//           </select>
//         </label>
//       )}

//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './productCard';
// // import './product.css'; // Import the CSS file
// // import './index.css';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [categoryKeyToIdMap, setCategoryKeyToIdMap] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchValue, setSearchValue] = useState('');

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (categoryResponse.data.results) {
//           const mainCategories = categoryResponse.data.results
//             .filter((category) => !category.parent)
//             .map((category) => category.key);

//           // Create a mapping between category keys and IDs
//           const keyToIdMap = {};
//           categoryResponse.data.results.forEach((category) => {
//             keyToIdMap[category.key] = category.id;
//           });

//           // Set only four main categories for the navbar
//           setCategories(['All', ...mainCategories.slice(0, 4)]);
//           setCategoryKeyToIdMap(keyToIdMap);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Apply category and search filters
//     const applyFilters = () => {
//       let filteredByCategory = products;

//       // Apply category filter
//       if (selectedCategory !== 'All') {
//         const categoryId = categoryKeyToIdMap[selectedCategory];
//         filteredByCategory = products.filter((product) => {
//           const currentCategories = product.masterData?.current?.categories;

//           // Check if currentCategories is an array and has at least one category with the selected id
//           return (
//             Array.isArray(currentCategories) &&
//             currentCategories.some((category) => category && category.id === categoryId)
//           );
//         });
//       }

//       // Apply search filter
//       const searchFilter = (product) => {
//         const productName =
//           product.masterData?.current?.name && product.masterData.current.name['en-US'];

//         return productName.toLowerCase().includes(searchValue.toLowerCase());
//       };

//       const filteredBySearch = filteredByCategory.filter(searchFilter);
//       setFilteredProducts(filteredBySearch);
//     };

//     applyFilters();
//   }, [selectedCategory, products, categoryKeyToIdMap, searchValue]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <ul>
//           {categories.map((category) => (
//             <li key={category} onClick={() => handleCategoryChange(category)}>
//               {category}
//             </li>
//           ))}
//           <li className="search-bar">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchValue}
//               onChange={handleSearchChange}
//             />
//           </li>
//         </ul>
//       </nav>
//       <h1>Product List</h1>
//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import ProductCard from './productCard';
// import Profile from './Profile';
// import './product.css';
// import Login from './Login';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//   const [categoryKeyToIdMap, setCategoryKeyToIdMap] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchValue, setSearchValue] = useState('');
//   const [subcategories, setSubcategories] = useState({});

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

//         const categoryResponse = await axios.get(categoryApiUrl, {
//           headers: {
//             'Authorization': 'Bearer Zc2vL3wNjVnFco9fUfR3SVNdnf3QKqRl',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (categoryResponse.data.results) {
//           const mainCategories = categoryResponse.data.results
//             .filter((category) => !category.parent)
//             .map((category) => category.key);

//           const keyToIdMap = {};
//           categoryResponse.data.results.forEach((category) => {
//             keyToIdMap[category.key] = category.id;
//           });

//           setCategories(['All', ...mainCategories.slice(0, 4)]);
//           setCategoryKeyToIdMap(keyToIdMap);
//         } else {
//           console.log('No data returned from the category API.');
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         setError(error.message || 'An error occurred while fetching category data.');
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const applyFilters = () => {
//       let filteredByCategory = products;

//       if (selectedCategory !== 'All') {
//         const categoryId = categoryKeyToIdMap[selectedCategory];
//         filteredByCategory = products.filter((product) => {
//           const currentCategories = product.masterData?.current?.categories;

//           return (
//             Array.isArray(currentCategories) &&
//             currentCategories.some((category) => category && category.id === categoryId)
//           );
//         });
//       }

//       const searchFilter = (product) => {
//         const productName =
//           product.masterData?.current?.name && product.masterData.current.name['en-US'];

//         return productName.toLowerCase().includes(searchValue.toLowerCase());
//       };

//       const filteredBySearch = filteredByCategory.filter(searchFilter);
//       setFilteredProducts(filteredBySearch);
//     };

//     applyFilters();
//   }, [selectedCategory, products, categoryKeyToIdMap, searchValue]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const projectKey = '12345678';
//         const region = 'eu-central-1';
//         const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': 'Bearer Zc2vL3wNjVnFco9fUfR3SVNdnf3QKqRl',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.results) {
//           const fullProductPromises = response.data.results.map(async (product) => {
//             const fullProductResponse = await axios.get(
//               `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
//               {
//                 headers: {
//                   'Authorization': 'Bearer Zc2vL3wNjVnFco9fUfR3SVNdnf3QKqRl',
//                   'Content-Type': 'application/json',
//                 },
//               }
//             );
//             return fullProductResponse.data;
//           });

//           const fullProducts = await Promise.all(fullProductPromises);
//           setProducts(fullProducts);
//         } else {
//           console.log('No data returned from the API.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message || 'An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(null); // Reset selected subcategory when changing the category
//   };

//   const handleSubcategoryChange = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <ul>
//           {categories.map((category) => (
//             <li key={category} className="category-item">
//               <div
//                 className="category"
//                 onMouseEnter={() => setSubcategories((prev) => ({ ...prev, [category]: true }))}
//                 onMouseLeave={() => setSubcategories((prev) => ({ ...prev, [category]: false }))}
//                 onClick={() => handleCategoryChange(category)}
//               >
//                 {category}
//                 {Array.isArray(subcategories[category]) && subcategories[category].length > 0 && (
//                   <ul className="subcategory-list">
//                     {subcategories[category].map((subcategory) => (
//                       <li
//                         key={subcategory}
//                         onClick={() => handleSubcategoryChange(subcategory)}
//                         className={
//                           selectedSubcategory === subcategory ? 'subcategory active' : 'subcategory'
//                         }
//                       >
//                         {subcategory}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </li>
//           ))}
//           <li className="search-bar">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//             />
//           </li>
//           <li>
//           <Link  to="/Signup" >
//             Signup
//           </Link></li>
//           <li>
//           <Link  to="/Login" >
//             Login
//           </Link></li>
//           <li className="profile-container" onClick={handleProfileClick}>
//           Profile
//           {showProfile && <Profile userData={userData} />}
//         </li>
//         </ul>
//       </nav>
//       <h1>Product List</h1>
//       {/* Display filtered products */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from './productCard';
import Profile from './Profile';
import { useUser } from './UserContext';
import './product.css';

import Cart from './cart';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [categoryKeyToIdMap, setCategoryKeyToIdMap] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [subcategories, setSubcategories] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const { userData } = useUser();
  const [cartData, setCartData] = useState([]);



  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    console.log(' component:', userData);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const projectKey = '12345678';
        const region = 'eu-central-1';
        const categoryApiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/categories`;

        const categoryResponse = await axios.get(categoryApiUrl, {
          headers: {
            'Authorization': 'Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO',
            'Content-Type': 'application/json',
          },
        });

        if (categoryResponse.data.results) {
          const mainCategories = categoryResponse.data.results
            .filter((category) => !category.parent)
            .map((category) => category.key);

          const keyToIdMap = {};
          categoryResponse.data.results.forEach((category) => {
            keyToIdMap[category.key] = category.id;
          });

          setCategories(['All', ...mainCategories.slice(0, 4)]);
          setCategoryKeyToIdMap(keyToIdMap);
        } else {
          console.log('No data returned from the category API.');
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
        setError(error.message || 'An error occurred while fetching category data.');
      }
    };

    fetchCategories();
  }, []);
 
  const addToCart = (product) => {
    const existingProductIndex = cartData.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      setCartData((prevCartData) => {
        const updatedCartData = [...prevCartData];
        updatedCartData[existingProductIndex].count += 1;
        return updatedCartData;
      });
    } else {
      setCartData((prevCartData) => [...prevCartData, { ...product, count: 1 }]);
    }
  };
  
  
  useEffect(() => {
    const applyFilters = () => {
      let filteredByCategory = products;

      if (selectedCategory !== 'All') {
        const categoryId = categoryKeyToIdMap[selectedCategory];
        filteredByCategory = products.filter((product) => {
          const currentCategories = product.masterData?.current?.categories;

          return (
            Array.isArray(currentCategories) &&
            currentCategories.some((category) => category && category.id === categoryId)
          );
        });
      }

      const searchFilter = (product) => {
        const productName =
          product.masterData?.current?.name && product.masterData.current.name['en-US'];

        return productName.toLowerCase().includes(searchValue.toLowerCase());
      };

      const filteredBySearch = filteredByCategory.filter(searchFilter);
      setFilteredProducts(filteredBySearch);
    };

    applyFilters();
  }, [selectedCategory, products, categoryKeyToIdMap, searchValue]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const projectKey = '12345678';
        const region = 'eu-central-1';
        const apiUrl = `https://api.${region}.aws.commercetools.com/${projectKey}/products`;

        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': 'Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO',
            'Content-Type': 'application/json',
          },
        });

        if (response.data.results) {
          const fullProductPromises = response.data.results.map(async (product) => {
            const fullProductResponse = await axios.get(
              `https://api.${region}.aws.commercetools.com/${projectKey}/products/${product.id}`,
              {
                headers: {
                  'Authorization': 'Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO',
                  'Content-Type': 'application/json',
                },
              }
            );
            return fullProductResponse.data;
          });

          const fullProducts = await Promise.all(fullProductPromises);
          setProducts(fullProducts);
        } else {
          console.log('No data returned from the API.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };
  useEffect(() => {
    console.log('Cart Data:', cartData);
  }, [cartData]);
  
  return (
    <div>
      <nav className="navbar">
        <ul>
          {categories.map((category) => (
            <li key={category} className="category-item">
              <div
                className="category"
                onMouseEnter={() => setSubcategories((prev) => ({ ...prev, [category]: true }))}
                onMouseLeave={() => setSubcategories((prev) => ({ ...prev, [category]: false }))}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
                {Array.isArray(subcategories[category]) && subcategories[category].length > 0 && (
                  <ul className="subcategory-list">
                    {subcategories[category].map((subcategory) => (
                      <li
                        key={subcategory}
                        onClick={() => handleSubcategoryChange(subcategory)}
                        className={
                          selectedSubcategory === subcategory ? 'subcategory active' : 'subcategory'
                        }
                      >
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
          <li className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </li>
          <li>
         
      <Link  to="/Signup" style={{ color: 'white' }} >
            Signup
           </Link></li>
           <li>
          <Link  to="/Login" style={{ color: 'white' }}>
           Login
         </Link></li>
          <li className="profile-container" onClick={handleProfileClick}>
            Profile
            {showProfile && <Profile userData={userData} />}
          </li>
        </ul>
      </nav>
      <h1>Product List</h1>
      {/* Display filtered products */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
       {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}

        </div>
      )}
       <Cart cartData={cartData}/>
    </div>
  );
};

export default Product;
