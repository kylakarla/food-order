import { useEffect, useState } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // Tuleb paring backendist
                const response = await fetch("http://localhost:3001/meals") 
                if (!response.ok) {
                    throw new Error("Failed to fetch meals.")
                }
                const data = await response.json() 
                console.log(data)
                setMeals(data)
            } catch (error) {
                console.error("Error fetching meals:", error)
            }
        }

        fetchMeals()
    }, [])

    return null
}

export default Meals;