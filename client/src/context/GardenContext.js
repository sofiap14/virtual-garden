import { createContext, useReducer } from 'react'

export const GardensContext = createContext() // making new context

export const gardensReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GARDENS':
            return {
                gardens: action.payload
            }
        case 'CREATE_GARDEN':
            return {
                gardens: [action.payload, ...state.gardens]
            }
        case 'DELETE_GARDEN':
            return {
                gardens: state.gardens.filter((garden) => garden._id !== action.payload._id)
            }
        case 'UPDATE_GARDEN': {
                // Find the index of the garden to be updated in the state
                const gardenIndex = state.gardens.findIndex(garden => garden._id === action.payload._id);
              
                if (gardenIndex === -1) {
                  // Garden not found, return the current state
                  return state;
                }
              
                // Create a copy of the state and update the specific garden
                const updatedGardens = [...state.gardens];
                updatedGardens[gardenIndex] = action.payload;
              
                return {
                  gardens: updatedGardens
                };
            }

        default:
            return state
    }
}

export const GardensContextProvider = ({ children }) => { // provide the created context to our app component tree by creating a ContextProvider component 
    
    const [state, dispatch] = useReducer(gardensReducer, {
        gardens: null
    })

    return (
        
        <GardensContext.Provider value={{...state, dispatch}}>
            { children } 
        </GardensContext.Provider> // the children property represents the App component that Provider wraps
        
    )
}