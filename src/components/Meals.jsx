import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const {
    data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return (
      <p className="text-center col-span-full text-amber-50 text-lg">
        Loading menu...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 col-span-full">{error}</p>;
  }

  return (
    <main id="main">
      <section className="flex flex-col items-center w-full">
        <h2 className="mt-16 text-4xl font-manrope font-medium tracking-wide border-b-4 border-amber-400">
          MENU
        </h2>
        <div className="max-w-5xl mt-8 mb-6 mx-auto w-5/6">
          <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(19em,1fr))] gap-4 gap-y-8 mx-auto list-none">
            {mealsData.map((meal) => (
              <MealItem key={meal.id ?? meal.name} meal={meal} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
