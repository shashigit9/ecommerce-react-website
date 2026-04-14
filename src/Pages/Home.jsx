import ProductCard from "../components/ProductCard"
import { getProducts } from "../data/Products"


export default function Home(){
    const Product=getProducts()
    return (
        <div className="page">
          <div className="home-hero">
            <h1 className="home-title">Welcome to Shophub</h1>
            <p className="home-subtitle">Discover amazing products at great prices</p>
          </div>
          <div className="container">
            <h2 className="page-title">Our Products</h2>
            <div className="product-grid">
                {
                    Product.map((product)=>(
                      <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
          </div>
        </div>
    )
}
