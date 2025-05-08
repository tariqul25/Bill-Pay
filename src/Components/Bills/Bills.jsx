import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'; 

const Bills = () => {
    const data = useLoaderData();
    const [selectedType, setSelectedType] = useState('All'); 
  
    const billTypes = ['All'];
    const seenTypes = [];

    for (let i = 0; i < data.length; i++) {
        const billType = data[i].bill_type;
        if (!seenTypes.includes(billType)) {
            seenTypes.push(billType);
            billTypes.push(billType);
        }
    }

    const [filteredData, setFilteredData] = useState(data); 


    useEffect(() => {
        if (selectedType === 'All') {
            setFilteredData(data); 
        } else {
            setFilteredData(data.filter(bill => bill.bill_type === selectedType));
        }
    }, [selectedType, data]);

    return (
        <div className="px-4">
            <p className='text-center text-3xl font-bold my-6'>My Bills</p>

            {/* Drop-down */}
            <div className='flex justify-center mb-6'>
                <select
                    className="select select-bordered w-20 max-w-xs"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    {
                        billTypes.map((type, idx) => (
                            <option key={idx} value={type}>{type}</option>
                        ))
                    }
                </select>
            </div>

            {
                filteredData.map((bill) => (
                    <div key={bill.id} className='bg-base-100 my-8 rounded-xl shadow-md'>
                        <div className='flex py-4 px-4 mb-4'>
                            <div>
                                <img className='w-20' src={bill.icon} alt="" />
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-5 flex-1 items-center text-center gap-2'>
                                <p>{bill.organization}</p>
                                <p>{bill.bill_type}</p>
                                <p>Amount: {bill.amount}</p>
                                <p className='text-sm md:text-base'>Due-date: {bill.due_date}</p>
                                <div className='flex justify-center items-center col-span-2 md:col-span-1'>
                                    <Link to={`/bills/${bill.id}`}>
                                        <button className='btn btn-error w-20'>Pay</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Bills;
