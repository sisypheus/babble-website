import Checked from "./Checked";
import Unchecked from "./Unchecked";

type Props = {
  price: number;
};

const PriceCard = () => {
  return (
    <div>
      <div className="shadow-lg rounded-2xl w-64 bg-white p-4">
        <p className="text-gray-800 text-xl font-medium mb-4">Entreprise</p>
        <p className="text-gray-900 text-3xl font-bold">
          $0
          <span className="text-gray-300 text-sm">/ month</span>
        </p>
        <p className="text-gray-600   text-xs mt-4">
          For most businesses that want to optimize web queries.
        </p>
        <ul className="text-sm text-gray-600  w-full mt-6 mb-6">
          <li className="mb-3 flex items-center ">
            <Checked />
            All illimited components
          </li>
        </ul>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
