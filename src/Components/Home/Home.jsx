import React from 'react';
import Container from '../Shared/Container';
import '../../Components/Shared/Style.css'
import img from '../../assets/Images/Group 6.png'
import { AiFillAndroid, AiOutlineMacCommand } from 'react-icons/ai';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { BsApple, BsWindows } from 'react-icons/bs';
import downloadBtn from '../../assets/Images/download2.png'
import macOrWindows from '../../assets/Images/icon.png'
import android from '../../assets/Images/and.png'
import apple from '../../assets/Images/apple.png'


const Home = () => {
    return (
        <>

            <Container>


                <nav className='flex justify-between  lg:mt-[44px] items-center'>
                    <h1 className='text-[#FF0043] logoIcon text-xl font-bold lg:pl-[146px]'>Telegraph</h1>

                    <button className='text-[14px] lg:mr-[154px] logoIcon     font-bold  w-[94px] h-[46px] bg-[#FF0043] rounded-[23px] text-[#fff] '>Try Beta</button>


                </nav>

                <header>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-[46px] mt-[76px]  items-center'>
                        <div className=' lg:ml-[146px]  '>
                            <h1 className='headwind text-6xl leading-[85px] font-medium text-[#00194A]'>Simple. Secure. Reliable messaging.</h1>

                            <p className='headerPara mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                            <div className='mt-[50px]'>
                                <button className='text-[16px] logoIcon w-[275px] h-[60px] bg-primary font-bold text-[#FFF] rounded-[30px] lg:mb-[164px]'>
                                    Request For Early Access
                                </button>
                            </div>

                        </div>
                        <div className='2xl:flex justify-end 2xl:'>
                            <img src={img} className=' lg:w-[654.712px] h-[604px] pr-[65.29px]' alt="" />


                        </div>
                    </div>

                </header>


                {/* Card */}
                <section>
                    <div className='grid md:grid-cols-3 mt-[67px]  px-[150px] mb-[38px]   grid-cols-1 gap-[30px]    lg:mt-10'>

                        <div className="card w-[360px] h-[272px] pb-[30px] px-[30px] pt-[36px] bg-[#FFF] CardShadow">

                           
                            <img src={android} className='w-[39.922px] h-[47.918px] mb-[26px] text-primary' alt="" />
                            <h1 className='text-[22px] headwind font-medium '>Android</h1>
                            <p className='headerPara mt-[15px] mb-[21px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

                            <div className="flex justify-between items-center">
                                <p className='  Try_link text-slate-300 text-[16px] underline font-normal hover:text-secondary '>
                                    Try Beta For Free
                                </p>
                                <img src={downloadBtn} className='w-5 h-[19px]' alt="" />

                            </div>

                        </div>



                        <div className="card w-[360px] h-[272px] pb-[30px] px-[30px] pt-[36px] bg-[#FFF] CardShadow">

                           
                            <img src={apple} alt="" className='w-[38.551px] h-[47.567px] mb-[26px] text-primary' />
                            <h1 className='text-[22px] headwind font-medium '>iPhone</h1>
                            <p className='headerPara mt-[15px] mb-[21px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

                            <div className="flex justify-between items-center">
                                <p className='  Try_link text-slate-300 text-[16px] underline font-normal hover:text-secondary '>
                                    Try Beta For Free
                                </p>
                                <img src={downloadBtn} className='w-5 h-[19px]' alt="" />

                            </div>

                        </div>

                        <div className="card w-[360px] h-[272px] pb-[30px] px-[30px] pt-[36px] bg-[#FFF] CardShadow">

                        <img src={macOrWindows} className='w-[110px] mb-[26px]  h-[42px]' alt="" />
                            <h1 className='text-[22px] headwind font-medium '>Mac or Windows</h1>
                            <p className='headerPara mt-[15px] mb-[21px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

                            <div className="flex justify-between items-center">
                                <p className='  Try_link text-slate-300 text-[16px] underline font-normal hover:text-secondary '>
                                    Try Beta For Free
                                </p>
                                <img src={downloadBtn} className='w-5 h-[19px]' alt="" />

                            </div>

                        </div>











                    </div>

                </section>



            </Container>



        </>
    );
};

export default Home;