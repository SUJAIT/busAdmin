import { useEffect, useState } from "react";

const PassengerData = () => {
  const [datas, setData] = useState([]); // Store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/passenger-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result); // Save data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {datas.length > 0 ? (
        datas.map((data, index) => (
          <div key={index} className="card cardW bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <div className="flex">
                <div className="flex gap-2 justify-between">
                  <div className="ml-12">
                    <h2 className="card-title">Email: {data.userEmail}</h2>
                    <p>Name: {data.userName}</p>
                    <p>Total Price: {data.totalPrice}</p>
                    <p>Transaction ID: {data.transactionId}</p>
                    <p>Timestamp: {data.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading passenger data...</p>
      )}
    </div>
  );
};

export default PassengerData;
