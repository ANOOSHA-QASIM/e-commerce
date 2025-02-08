import React from 'react'

interface Iprops {
    title: string;
    subtitle: string;
}

const Common: React.FC<Iprops> = ({ title, subtitle }: Iprops) => {
    return (
        <div className='h-[286px] md:max-w-[1920px] w-full bg-[#F6F5FF] p-[90px] md:p-[90px]'>
            <div className='w-full max-w-[314px] h-[64px] grid gap-1'>
                <h1 className='w-full h-[36px] flex items-end text-center font-bold text-[36px] leading-[42.91px] text-[#101750]'>
                    {title}
                </h1>
                <div className='flex gap-2 flex-wrap justify-center md:justify-start'>
                    <span className='text-[16px] text-[#000000] leading-[19.2px] font-medium'>Home</span>.
                    <span className='text-[16px] text-[#000000] leading-[19.2px] font-medium'>Pages</span>
                    <span className='text-[16px] text-[#FB2E86] leading-[19.2px] font-medium'>. {subtitle}</span>
                </div>
            </div>
        </div>
    )
}

export default Common