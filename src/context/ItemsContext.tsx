import { createContext, useContext } from 'react';
import useLocaleStorage from '../hooks/useLocaleStorage';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';

type Item = {
  name: string,
  value: Boolean,
  class: 'extra' | 'service'
}

type ItemsContextType = {
  items: Item[],
  handleAdd: (data: Item) => void,
  handleRemove: (data: Item) => void
}


const ItemsContext = createContext({} as ItemsContextType);

export const useItemsContext = ()=>{
  return useContext(ItemsContext);
}

export const ItemsProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useLocaleStorage<Item[]>('fenzo-items', [])

  const handleAdd = (data: Item) => {
    const arr = items.filter(e => e?.name !== data?.name)
    setItems([...arr, data])
  }
  const handleRemove = (data: Item) => {
    setItems(prev => prev.filter(e => e?.name !== data?.name))
  }

  return <ItemsContext.Provider value={{items, handleAdd, handleRemove}}>
    {children}
  </ItemsContext.Provider>
}