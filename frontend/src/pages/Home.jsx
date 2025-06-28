import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/product/GenderCollectionSection'
import NewArrivals from '../components/product/NewArrivals'
import ProductDetails from '../components/product/ProductDetails'
import ProductGrid from '../components/product/ProductGrid'
import FeaturesCollection from '../components/product/FeaturesCollection'
import FeatureSection from '../components/product/FeatureSection'

const placeholderProducts = [
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
  {
    _id: 5,
    name: "product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?/random=5" }],
  },
  {
    _id: 6,
    name: "product 6",
    price: 600,
    images: [{ url: "https://picsum.photos/500/500?/random=6" }],
  },
  {
    _id: 7,
    name: "product 7",
    price: 700,
    images: [{ url: "https://picsum.photos/500/500?/random=7" }],
  },
  {
    _id: 8,
    name: "product 8",
    price: 800,
    images: [{ url: "https://picsum.photos/500/500?/random=8" }],
  },
];
const Home = () => {
  return (
    <div>
     <Hero /> 
     <GenderCollectionSection />
     <NewArrivals />
     {/* best seller sections */}
     <h2 className='text-3xl text-center font-bold mb-4'>
        Best Seller
     </h2>
     <ProductDetails />
     
     <div className='container mx-auto'>
        <h2 className='text-2xl text-center font-bold mb-4'>
            Top Wear for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
     </div>
     <FeaturesCollection />
     <FeatureSection />
    </div>
  )
}

export default Home
