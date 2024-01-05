import React, { createContext, useContext, useState } from 'react';

interface MenuContextProps {
  isMenuVisible: boolean;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({children} : any) => {
  const [isMenuVisible] = useState(true);

  return (
    <MenuContext.Provider value={{ isMenuVisible }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
