import { useEffect, useState } from "react"
import { ProductCard } from "../../../components/Elements/ProductCard"
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error){
        toast.error(error.message, {closeButton : true , position : "bottom-center"});
      }
    }
    fetchProducts();
  },[])

    return (
      
      <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>  
          { !products.length && 
              (<div className="flex flex-wrap justify-center lg:flex-row">
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-5">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <span className="font-semibold dark:text-slate-100 flex justify-center m-2 pt-2">loading</span>
              </div>
            </div>)}  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {products.map((product) => (
                  <ProductCard key={product.id} product = {product}/>
              ))}
            </div>
      </section>
    )
  }