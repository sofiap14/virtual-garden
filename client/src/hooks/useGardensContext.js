import { GardensContext } from "../context/GardenContext";
import { useContext } from "react";

export const useGardensContext = () => {
    const context = useContext(GardensContext)

    if (!context) {
        throw Error('useGardensContext must be used inside an GardensContextProvider')
    }

    return context
}