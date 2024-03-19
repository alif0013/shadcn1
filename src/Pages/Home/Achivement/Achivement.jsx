import React from 'react';

const Achivement = () => {
    return (
        <div className='md:w-[1200px] mx-auto my-20'>
            <div className='flex items-center gap-4 py-2'>
                <h2 className='text-xl text-green-500 font-bold'>SOME FUN FACT</h2>
                <p className='w-[100px] font-extrabold text-green-500'>
                    -------------
                </p>
            </div>

            <h1 className='font-bold text-5xl text-blue-900'>Our Great <span className='underline text-green-500'>Achievement</span></h1>
        </div>
    );
};

export default Achivement;