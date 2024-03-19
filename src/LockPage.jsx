import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LockPage() {

    const [ans, setAns] = useState('MoMo');
    const navigate =  useNavigate();

    return (
        <div className='w-full h-[100vh] flex flex-col bg-slate-950 items-center justify-center text-xl text-white gap-20'>
            <div className='text-4xl'>
                Q) What Do I Call You ?
            </div>
            <div className='w-[40%] text-2xl space-y-6'>
                <div className=' space-x-6'>
                    <input type='radio' name='ans' id='MoMo' value='MoMo' onClick={(e) => setAns(e.target.value)} />
                    <label htmlFor="MoMo">MoMo</label>
                </div>

                <div className=' space-x-6'>
                    <input type='radio' name='ans' id='Pyaaz' value='Pyaaz' onClick={(e) => setAns(e.target.value)} />
                    <label htmlFor="Pyaaz">Pyaaz</label>
                </div>

                <div className=' space-x-6'>
                    <input type='radio' name='ans' id='Aloo' value='Aloo' onClick={(e) => setAns(e.target.value)}/>
                    <label htmlFor="Aloo">Aloo</label>
                </div>

                <div className=' space-x-6'>
                    <input type='radio' name='ans' id='Samosa' value='Samosa' onClick={(e) => setAns(e.target.value)} />
                    <label htmlFor="Samosa">Samosa</label>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    if(ans === 'Aloo') {
                        navigate("/love");
                    }
                }}
                className='bg-slate-800 p-4 rounded-lg'
                >Submit</button>
            </div>
        </div>
    )
}

export default LockPage