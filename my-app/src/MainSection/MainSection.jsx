import { Banner } from "./Components/Banner";
import Card from "./Components/Card";
import { useItemArray } from "../Context/Context";

const MainSection = () => {
  const { itemDetails } = useItemArray();

  const categories = Array.from(
    new Set(itemDetails.map((item) => item.category))
  );

  return (
    <>
      <Banner />
      <div className="flex justify-around bg-yellow-400 py-1 sm:py-2 overflow-x-auto sticky top-0">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category}`}
            className="uppercase font-bold text-xl sm:text-2xl mx-4"
          >
            {category}
          </a>
        ))}
      </div>
      <br />
      {categories.map((category) => (
        <div key={category} id={category} className="pt-2 sm:pt-8">
          <h1 className="uppercase font-bold text-4xl sm:text-5xl m-2 sm:m-4">
            {category}
          </h1>
          <div className="flex max-w-screen-2xl my-8 mb-16 flex-wrap mx-auto px-2 gap-x-2 gap-y-4 justify-center">
            {itemDetails
              .filter((item) => item.category === category)
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  img={item.image}
                  amount={item.amount}
                  carted={item.carted}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MainSection;
