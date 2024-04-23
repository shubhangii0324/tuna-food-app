import React, { PropsWithChildren } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const AppLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className='flex flex-col gap-y-3 md:gap-y-20 h-full w-full'>
            <div className='w-full md:max-h-[120px] shadow-header flex flex-col md:flex-row items-center bg-white'>
                <AppHeader />
            </div>
            {children}
            <div className='w-full max-h-[300px] shadow-header flex items-center bg-bg_footer pb-4'>
            <AppFooter />
            </div>
        </div>
    );
}

export default AppLayout;
