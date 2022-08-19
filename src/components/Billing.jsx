import React from 'react';
import {bill, apple, google} from '../assets';
import styles, { layout } from '../style';


const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse} md:space-x-16`}>
    
    {/* Left Side */}
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative x-[5]' />


        {/* gradient start */}
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        {/* gradient end */}

      </div>

      {/* right side */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Control your income and expenses with ease, so you can focus on growing your business, without the need to manage your finances through intermediaries.</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />

          <img src={google} alt="play_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>

      </div>
      
    </section>
  )
}

export default Billing