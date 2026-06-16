import axios from "axios";

import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

export default function Meals() {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/meals");
        setMealsData(response.data);
      } catch (err) {
        setError("Unable to load menu. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <main id="main">
      <section className="flex flex-col items-center w-full">
        <h2 className="mt-16 text-4xl font-manrope font-medium tracking-wide border-b-4 border-amber-400">
          MENU
        </h2>
        <div className="grid w-5/6 grid-cols-[repeat(auto-fit,minmax(19em,1fr))] gap-4 gap-y-8 max-w-5xl mt-8 mb-6 mx-auto">
          {isLoading ? (
            <p className="text-center col-span-full text-amber-50 text-lg">Loading menu...</p>
          ) : error ? (
            <p className="text-center text-red-500 col-span-full">{error}</p>
          ) : (
            mealsData.map((meal) => (
              <FoodItem
                key={meal.id ?? meal.name}
                meal={meal}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
