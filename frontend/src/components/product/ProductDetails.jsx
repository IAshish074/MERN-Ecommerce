import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 120,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBran",
  material: "Leather",
  Sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/id/1011/500/500",
      altText: "Stylish Jacket Front",
    },
    {
      url: "https://picsum.photos/id/1015/500/500",
      altText: "Stylish Jacket Back",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?/random=1" }],
  },
  {
    _id: 2,
    name: "product 2",
    price: 200,
    images: [{ url: "https://picsum.photos/500/500?/random=2" }],
  },
  {
    _id: 3,
    name: "product 3",
    price: 300,
    images: [{ url: "https://picsum.photos/500/500?/random=3" }],
  },
  {
    _id: 4,
    name: "product 4",
    price: 400,
    images: [{ url: "https://picsum.photos/500/500?/random=4" }],
  },
  
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize , setSelectedSize] = useState("")

  const [selectedColor , setSelectedColor] = useState("")

  const [quantity , setQuantity] = useState(1)

  const [isButtonDisabled , setButtonDisabled] = useState(false)

  const handleAddToCart = ()=>{
    if(!selectedSize || !selectedColor){
        toast.error("please select a size and color before adding to cart.",{
            duration:1000,
        })
        return;
    }
    setButtonDisabled(true)

    setTimeout(()=>{
        toast.success("product added to cart",{
            duration:1000,
        })
        setButtonDisabled(false)
    },500)
  }
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (action) =>{
    if(action === "plus"){
        setQuantity((prev)=>prev+1)
    }
    if(action === "minus" && quantity >1){
        setQuantity((prev)=>prev-1)
    }
  }
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : ""
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage && (
                <img
                  src={mainImage}
                  alt={selectedProduct.images[0]?.altText || "Main Product"}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-black" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="md:w-1/2 ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice}
            </p>
            <p className="text-xl text-gray mb-2">${selectedProduct.price}</p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.Sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button 
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled?"cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}>
             {isButtonDisabled?"Adding...":"ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <h2 className="text-2xl text-center font-md mb-4">You May Also Like</h2>
            <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
