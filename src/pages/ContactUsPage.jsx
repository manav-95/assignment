import React, { useState } from 'react';

function ContactUsPage() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData ({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form Submitted: ", formData);

        setFormData({
            name:'',
            email:'',
            message:''
        });

        setShowToast(true);

        setTimeout(()=>{
            setShowToast(false)
        },3000)
    };

    

    return (
        <div className='container mx-auto py-8 px-4'>
            <div className='h-auto md:h-[60vh] flex flex-col sm:flex sm:flex-col md:flex-row justify-center gap-4'>
                <section className='mt-8 mx-auto md:my-auto md:mx-4'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-4'>Contact Us</h1>
                    <p className='text-base md:text-xl font-semibold'>Springdale Public School, 123 Education Lane,</p>
                    <p className='text-base md:text-xl font-semibold'>Cityville, State, ZIP Code</p>
                    <p className='text-base md:text-xl font-semibold'>+1 (123) 456-7890</p>
                    <p className='text-base md:text-xl font-semibold'>info@springdale.edu</p>
                </section>
                <form onSubmit={handleSubmit} className='my-2 mx-auto bg-base-100 border-1 py-8 shadow-md rounded-sm px-4 md:px-10 md:my-auto md:mx-4 md:min-w-[450px] w-full md:w-auto md:max-w-none'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='font-semibold mb-1'>Name</label>
                        <input type='text' onChange={handleChange} value={formData.name} className='p-2 border-1 bg-base-200 mb-3 w-full block rounded' name='name' autoFocus={true} required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='font-semibold mb-1'>Email</label>
                        <input type='email' onChange={handleChange} value={formData.email} className='p-2 border-1 bg-base-200 mb-3 w-full block rounded' name='email' required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='message' className='font-semibold mb-1'>Message</label>
                        <textarea onChange={handleChange} value={formData.message} maxLength={15} className='p-2 border-1 bg-base-200 mb-3 w-full block rounded' name='message' rows={4}  />
                    </div>
                    <div className='flex flex-col'>
                        <button type='submit' className='bg-[#ff4122] border-none block mt-3 py-2 rounded-sm text-white font-semibold text-center'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
          
            {showToast && (
                <div className='fixed top-1.5 w-1/2 text-center z-50 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-4 rounded-sm shadow-lg'>
                    Thank you for joining with us!
                </div>
            )}
        </div>
    );
}

export default ContactUsPage;
