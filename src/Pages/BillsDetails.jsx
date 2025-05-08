// import { use } from 'react';
// import { Link, useLoaderData, useParams } from 'react-router';
// import { PayContext } from '../Provider/PayProvider';
// import toast from 'react-hot-toast';

// const BillsDetails = () => {
//     const {handlePayBill,paid,setPaid}=use(PayContext)
//     // console.log(handlePayBill);
//     const data = useLoaderData()
//     const { id } = useParams()
//     // const [paid,setPaid]=useState(false)
//     // console.log(typeof id);
//     const billId =parseInt(id)
//     const singleBill = data.find(bill => bill.id === (billId));
//     // console.log(singleBill);
//     const { bill_type,mini_icon, icon, organization, amount, due_date } = singleBill
//     const isPaid = paid.includes(billId);

//     return <div className='bg-blue-100 rounded-md w-11/12 md:w-7/12  mx-auto'>
//        <div className='  flex items-center justify-center space-x-10 my-12 py-7 px-8'>
//        <div className='relative'>
//             <img className=' h-60 w-74 p-4 ' src={icon} alt="" />
//             <div>
//                 <img className='absolute w-8 md:w-9 top-4 left-32 md:left-38 lg:left-61' src={mini_icon} alt="" />
//             </div>
//         </div>
//         <div className='space-y-3 text-xs md:text-base'>
//             <p>{organization}</p>
//             <p>Type: {bill_type}</p>
//             <p>Payable: {amount} </p>
//             <p className='text-xs md:text-base'>Due-Date: {due_date}</p>
//             <div className=''>
//                 {
//                     isPaid? 
//                     (<Link to='/bills'><button onClick={()=>{toast.error('already paid')
//                         return
//                       } } className='btn '>Pay Bill</button> </Link> )  : (<Link to='/bills'>
//                         <button onClick={()=>{
//                             handlePayBill(amount,billId)
//                             setPaid(true)
//                         } } className='btn'>Pay Bill</button></Link>)
//                 }
//             </div>
//         </div>
//        </div>
//     </div>
// };

// export default BillsDetails;


import React, { use} from 'react'; 
import { Link, useLoaderData, useParams } from 'react-router';
import { PayContext } from '../Provider/PayProvider';
import toast from 'react-hot-toast';

const BillsDetails = () => {
    const { handlePayBill, paid } = use(PayContext); 

    const data = useLoaderData();
    const { id } = useParams();
    const billId = parseInt(id);
    const singleBill = data.find((bill) => bill.id === billId);

    const { bill_type, mini_icon, icon, organization, amount, due_date } = singleBill;
    const isPaid = paid.includes(billId); 

    return (
        <div className="bg-blue-100 rounded-md w-11/12 md:w-7/12 mx-auto">
            <div className="flex items-center justify-center space-x-10 my-12 py-7 px-8">
                <div className="relative">
                    <img className="h-60 w-74 p-4" src={icon} alt="" />
                    <div>
                        <img
                            className="absolute w-8 md:w-9 top-4 left-32 md:left-38 lg:left-61"
                            src={mini_icon}
                            alt=""
                        />
                    </div>
                </div>
                <div className="space-y-3 text-xs md:text-base">
                    <p>{organization}</p>
                    <p>Type: {bill_type}</p>
                    <p>Payable: {amount}</p>
                    <p className="text-xs md:text-base">Due-Date: {due_date}</p>
                    <div className="">
                        {isPaid ? ( 
                            <Link to="/bills">
                                <button
                                    onClick={() => {
                                        toast.error('Already paid');
                                    }}
                                    className="btn"
                                >
                                    Pay Bill
                                </button>
                            </Link>
                        ) : (
                            <Link to="/bills">
                                <button
                                    onClick={() => {
                                        handlePayBill(amount, billId);
                                    }}
                                    className="btn"
                                >
                                    Pay Bill
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillsDetails;
