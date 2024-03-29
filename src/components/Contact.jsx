import React, { useState, useLayoutEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import usePageVisit from '../hooks/usePageVisit'
import ContactLight from '../assets/images/contact-light.png'
import ContactDark from '../assets/images/contact-dark.png'

const Contact = () => {
    const { visitCount } = usePageVisit('contactPage')
    const [isTypingDone, setIsTypingDone] = useState(false)
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

    return (
        <article className='w-full h-full bg-white dark:bg-black'>
            <section className='max-w-[1040px] m-auto md:px-20 p-4 py-16'>
                <header className='py-8 mb-8 fade-in font-chicago text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    <h1>CONTACT</h1>
                </header>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-0 px-4'>
                        <picture className='w-60 h-60 ml-auto mr-auto fade-in'>
                            <source 
                                srcSet={ContactDark}
                                media='(prefers-color-scheme: dark)'
                            />
                            <img 
                                src={ContactLight}
                                alt="An 8-bit letter envelope" 
                            />
                        </picture>
                        <h2 className='mb-8 text-2xl text-center font-geneva font-bold text-gray-800 dark:text-gray-300'>
                            {/* Display a typing animation on first visit or static content otherwise */}
                            { visitCount === 1 ? (
                                <>
                                    {/* A hidden copy of the text for screenreader accessibility */}
                                    <span className='visually-hidden'>
                                        Feel free to leave a message below — I'm open to opportunities or feedback.
                                    </span>
                                    <TypeAnimation
                                        aria-hidden='true'  // Removes element from the a11y tree
                                        cursor={false}
                                        className={CURSOR_CLASS_NAME}
                                        sequence={[
                                            2000,
                                            "Feel free to leave a message below —",
                                            1000,
                                            "Feel free to leave a message below — I'm open to opportunities or feedback.",
                                            (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                            () => setIsTypingDone(true)
                                        ]}
                                        wrapper='span'
                                        repeat={0}
                                        speed={50}
                                    />
                                </>
                            ) : (
                                <span className='fade-in'>
                                    Feel free to leave a message below — I'm open to opportunities or feedback.
                                </span>
                            )}
                        </h2>
                        <div className={ visitCount > 1 || isTypingDone ? 'fade-in' : 'opacity-0' }>
                            <p className='text-center text-lg font-geneva pb-4 text-gray-800 dark:text-gray-300'>
                                Or, connect with me on <a
                                    href='https://www.linkedin.com/in/allenjbb/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='cursor-pointer underline text-teal-500'
                                    aria-label='Visit my LinkedIn profile to connect'
                                >
                                    LinkedIn
                                </a>.
                            </p>
                            <form
                                action='https://getform.io/f/3dbb660c-0c6b-449e-abfc-78b124fc4b9f'
                                method='POST'
                                encType='multipart/form-data'
                                aria-labelledby='contactForm'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-gray-800 dark:text-gray-300'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='name' className='uppercase text-sm font-chicago font-bold py-2'>
                                            Name<span className='text-red-500'>*</span>
                                        </label>
                                        <input
                                            id='name'
                                            className='border-2 rounded-lg p-3 flex font-geneva bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
                                            type='text'
                                            name='name'
                                            required
                                            aria-required='true'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor='phone' className='uppercase text-sm font-chicago font-bold py-2'>
                                            Phone
                                        </label>
                                        <input
                                            id='phone'
                                            className='border-2 rounded-lg p-3 flex font-geneva bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                                    <label htmlFor='email' className='uppercase text-sm font-chicago font-bold py-2'>
                                        Email<span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        id='email'
                                        className='border-2 rounded-lg p-3 flex font-geneva bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
                                        type='email'
                                        name='email'
                                        required
                                        aria-required='true'
                                    />
                                </div>
                                <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                                    <label htmlFor='subject' className='uppercase text-sm font-chicago font-bold py-2'>
                                        Subject
                                    </label>
                                    <input
                                        id='subject'
                                        className='border-2 rounded-lg p-3 flex font-geneva bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2 text-gray-800 dark:text-gray-300'>
                                    <label htmlFor='message' className='uppercase text-sm font-chicago font-bold py-2'>
                                        Message<span className='text-red-500'>*</span>
                                    </label>
                                    <textarea
                                        id='message'
                                        className='border-2 rounded-lg p-3 font-geneva bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
                                        rows='5'
                                        name='message'
                                        required
                                        aria-required='true'
                                    />
                                </div>
                                <button className='flex mr-0 ml-auto bg-gray-200 font-chicago text-sm text-gray-800 font-bold mt-4 py-2 px-4 rounded-lg border-2 border-gray-200 hover:bg-teal-500 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:border-teal-500 hover:text-white dark:hover:text-black'>
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Contact