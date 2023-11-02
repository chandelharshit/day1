export default function Product(){
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                // src={image}
                // alt={name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Product ID: {pid}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {name}
              </h2>
              <p className="mt-2 text-gray-500">{desc}</p>
              <div className="mt-3 flex items-center">
                <span
                  className={`${
                    isAvailable ? 'text-green-500' : 'text-red-500'
                  } inline-block`}
                >
                  {isAvailable ? 'Available' : 'Out of Stock'}
                </span>
                <span className="ml-2 text-gray-600">Price: ${price}</span>
              </div>
            </div>
          </div>
        </div>
      );
}