import React from 'react';
import Container from '../Shared/Container';
import '../../Components/Shared/Style.css'
import img from '../../assets/Images/Group 6.png'

const Home = () => {
    return (
        <>

            <Container>


                <header className='flex justify-between  lg:mt-[44px] items-center'>
                    <h1 className='text-[#FF0043] text-xl font-bold lg:pl-[146px]'>Telegraph</h1>
                
                        <button className='text-[14px] lg:mr-[175px] font-bold  w-[94px] h-[46px] bg-[#FF0043] rounded-[23px] text-[#fff] '>Try Beta</button>
                   

                </header>

                <section>
                    <div className='lg:flex justify-center gap-[46px] mt-[76px]  items-center'>
                        <div className='lg:ml-[146px] w-[552px] '>
                            <h1 className=' text-6xl leading-[85px] font-medium text-[#00194A]'>Simple. Secure. Reliable messaging.</h1>

                            <p className='font-light  text-lg text-[#00194A] mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                            <div className='mt-[50px]'>
                                <button className='text-[16px] w-[275px] h-[60px] bg-primary font-bold text-[#FFF] rounded-[30px]'>
                                    Request For Early Access
                                </button>
                            </div>

                        </div>
                        <div className='lg:w-[594px] h-[594px]'>
                            <img src={img} className='  pr-[76.37px]' alt="" />


                        </div>
                    </div>

                </section>
            </Container>



        </>
    );
};

export default Home;