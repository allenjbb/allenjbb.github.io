import React from 'react'

const Contact = () => {
    return (
        <div className='dark:bg-black'>
            <div id='contact' className='max-w-[1040px] m-auto md:px-20 p-4 py-16 font-chicago'>
                <h1 className='py-8 mb-10 text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    Contact
                </h1>
                <div className='max-w-[1000px] w-full px-4'>
                    <p className='text-left mb-6 text-2xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                        I'm open to job opportunities. Feel free to leave a message below or reach out on <a
                            href='https://www.linkedin.com/in/allenjbb/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer underline hover:text-blue-600 dark:text-teal-500'
                        >
                            LinkedIn
                        </a>.
                    </p>
                </div>
                <form
                    action='https://getform.io/f/3dbb660c-0c6b-449e-abfc-78b124fc4b9f'
                    method='POST'
                    encType='multipart/form-data'
                >
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-gray-800 dark:text-gray-300'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm font-bold py-2'>
                                Name
                            </label>
                            <input
                                className='border-2 rounded-lg p-3 flex dark:border-slate-700 dark:bg-slate-900'
                                type="text"
                                name='name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm font-bold py-2'>
                                Phone
                            </label>
                            <input
                                className='border-2 rounded-lg p-3 flex dark:border-slate-700 dark:bg-slate-900'
                                type="text"
                                name='phone'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                        <label className='uppercase text-sm font-bold py-2'>
                            Email
                        </label>
                        <input
                            className='border-2 rounded-lg p-3 flex dark:border-slate-700 dark:bg-slate-900'
                            type="email"
                            name='email'
                        />
                    </div>
                    <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                        <label className='uppercase text-sm font-bold py-2'>
                            Subject
                        </label>
                        <input
                            className='border-2 rounded-lg p-3 flex dark:border-slate-700 dark:bg-slate-900'
                            type="text"
                            name='subject'
                        />
                    </div>
                    <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                        <label className='uppercase text-sm font-bold py-2'>
                            Message
                        </label>
                        <textarea
                            className='border-2 rounded-lg p-3 dark:border-slate-700 dark:bg-slate-900'
                            rows='10'
                            name='message'
                        />
                    </div>
                    <button className='flex mr-0 ml-auto bg-gray-800 text-sm text-white font-bold mt-4 py-2 px-4 rounded-lg border-2 border-gray-800 hover:bg-white hover:text-gray-800 dark:text-slate-800 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-slate-800 dark:hover:text-gray-300'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact