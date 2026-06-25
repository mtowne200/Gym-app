import { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_ITEMS } from '../data/pennyItems';

const PennyItemsContext = createContext(null);

export function PennyItemsProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('pennyItems');
      return stored ? JSON.parse(stored) : SAMPLE_ITEMS;
    } catch {
      return SAMPLE_ITEMS;
    }
  });

  useEffect(() => {
    localStorage.setItem('pennyItems', JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    const item = {
      ...newItem,
      id: Date.now(),
      price: 0.01,
      status: 'unverified',
      confirmations: 0,
      dateFound: new Date().toISOString().split('T')[0],
    };
    setItems(prev => [item, ...prev]);
    return item.id;
  }

  function confirmItem(id) {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, confirmations: item.confirmations + 1, status: item.confirmations >= 9 ? 'verified' : item.status }
          : item
      )
    );
  }

  function getItemById(id) {
    return items.find(item => item.id === Number(id));
  }

  return (
    <PennyItemsContext.Provider value={{ items, addItem, confirmItem, getItemById }}>
      {children}
    </PennyItemsContext.Provider>
  );
}

export function usePennyItems() {
  return useContext(PennyItemsContext);
}
