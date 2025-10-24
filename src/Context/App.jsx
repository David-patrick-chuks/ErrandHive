import { createContext, useState } from 'react';


const AppContext = createContext(null);


const AppProvider=({ children}) => {
    const [user,setUser] = useState(null)

    return(
        <AppContext.Provider value={{user}}  >
            {children}
        </AppContext.Provider >
    )
};

export { AppContext, AppProvider };
