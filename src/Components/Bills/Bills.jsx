import { Link, useLoaderData } from 'react-router';

const Bills = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <p className='text-center text-3xl font-bold'>My Bills</p>
            {
                data.map((bill) => {
                    return <div className='bg-base-100 my-8 rounded-xl'>
                        <div className='flex py-4 px-4  mb-4'>
                            <div>
                                <img className='w-30' src={bill.icon} alt="" />
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-5 flex-1 items-center text-center '>
                                <p>{bill.organization}</p>
                                <p>{bill.bill_type}</p>
                                <p>Amount: {bill.amount}</p>
                                <p className='text-sm md:text-base'>Due-date: {bill.due_date}</p>
                                <div className='flex justify-center items-center col-span-2 md:col-span-1'>
                                    <Link to={`/bills/${bill.id}`}><button className='btn btn-error w-20'>Pay</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Bills;