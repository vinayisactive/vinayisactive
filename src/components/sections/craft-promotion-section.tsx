import React, { FC } from 'react'
import SectionHeader from '@/components/ui/section-header'

const CraftPromotionSection : FC= () => {
  return (
    <main className='w-full'>
        <SectionHeader 
            heading='Craft showcase'
            subHeading='Give these cool web applications a spin—Crafted by me!'
        />

        <div className='bg-black/5 rounded-md h-32 flex justify-center items-center text-black/50 font-bold'>
            <p>Coming soon...</p>
        </div>
    </main>
  )
}

export default CraftPromotionSection
