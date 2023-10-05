import { createContext, useContext } from 'react';
import useLocaleStorage from '../hooks/useLocaleStorage';

type Cart = {
  package: Package,
}

type CartContextType = {
  cart: Cart,
  handleAddPackage: (selectedPackage: Package) => void
}


const CartContext = createContext({} as CartContextType);

export const useCartContext = ()=>{
  return useContext(CartContext);
}

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = useLocaleStorage<Cart>('fenzo-cart', {} as Cart)

  const handleAddPackage = (selectedPackage: Package)=>{
    setCart({package: selectedPackage})
  }

  return <CartContext.Provider value={{cart, handleAddPackage}}>
    {children}
  </CartContext.Provider>
}