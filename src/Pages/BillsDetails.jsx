import { use, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { PayContext } from '../Provider/PayProvider';
import toast from 'react-hot-toast';

const BillsDetails = () => {
    const {handlePayBill}=use(PayContext)
    // console.log(handlePayBill);
    const data = useLoaderData()
    const { id } = useParams()
    const [click,setClick]=useState(false)
    // console.log(typeof id);
    const singleBill = data.find(bill => bill.id === parseInt(id));
    // console.log(singleBill);
    const { bill_type, icon, organization, amount, due_date } = singleBill

    return <div className='bg-blue-100 rounded-md w-11/12 md:w-7/12  mx-auto'>
       <div className='flex items-center justify-center space-x-10 my-12 py-7 px-8'>
       <div>
            <img className='h-60 p-4 ' src={icon} alt="" />
        </div>
        <div className='space-y-3 text-xs md:text-base'>
            <p>{organization}</p>
            <p>Type: {bill_type}</p>
            <p>Payable: {amount} </p>
            <p className='text-xs md:text-base'>Due-Date: {due_date}</p>
            <div className=''>
                {
                    click? <button onClick={()=>{
                      toast.error('already paid')
                      return
                        // console.log(setClick);
                    } } className='btn '>Pay Bill</button>  : <button onClick={()=>{
                        handlePayBill(amount,id)
                        setClick(true)
                        
                        // console.log(setClick);
                    } } className='btn'>Pay Bill</button>
                }
            </div>
        </div>
       </div>
    </div>
};

export default BillsDetails;