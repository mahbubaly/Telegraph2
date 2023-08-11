import React from 'react';
import Container from '../Shared/Container';
import '../../Components/Shared/Style.css'
import img from '../../assets/Images/Group 6.png'
import downloadBtn from '../../assets/Images/download2.png'
import macOrWindows from '../../assets/Images/icon.png'
import android from '../../assets/Images/and.png'
import apple from '../../assets/Images/apple.png'
import manUsingPhone from '../../assets/Images/content.png'
import Security from '../../assets/Images/Security.png'
import messages from '../../assets/Images/messages.png'
import doc from '../../assets/Images/documents.png'
import womenGroup from '../../assets/Images/women.png'



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
                        <div className=' lg:ml-[146px] '>
                            <h1 className='headwind lg:text-6xl text-[30px] leading-[85px] font-medium text-[#00194A]'>Simple. Secure. Reliable messaging.
                            </h1>

                            <p className='headerPara mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                            <div className='mt-[50px]'>
                                <button className='text-[16px] logoIcon w-full lg:w-[275px] h-[60px] bg-primary font-bold text-[#FFF] rounded-[30px] lg:mb-[164px]'>
                                    Request For Early Access
                                </button>
                            </div>

                        </div>
                        <div className='2xl:flex justify-end  2xl:'>
                            <img src={img} className='w-[280px] mx-auto lg:mx-0  h-[269px] lg:w-[654.712px] lg:h-[604px] lg:pr-[65.29px]' alt="" />


                        </div>
                    </div>

                </header>


                {/* Card */}
                <section>
                    <div className='grid md:grid-cols-3 mt-[67px]  lg:px-[150px] mb-[38px]   grid-cols-1 gap-[30px]    lg:mt-10'>

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


                {/* Simple, Personal, Real Time Messaging */}


                <section>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-[37px] items-center lg:px-[150px]'>
                        <div className='w-[280px] mx-auto lg:mx-0 h-[263px] lg:w-[676px]  lg:h-[635px]'>
                            <img src={manUsingPhone} alt="" />

                        </div>
                        <div className='lg:ml-[52px]'>
                            <h1 className='text-[35px] headwind font-medium text-[#00194A] lg:mb-[30px]'>Simple, Personal, Real Time Messaging</h1>
                            <p className='text-lg font-light headerPara'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                <br />
                                <br />


                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>

                        </div>
                    </div>
                </section>




                {/* Sharing Cool Stuff With Your Community */}

                <section>
                    <div className='grid md:grid-cols-2 lg:px-[150px] items-center mt-[50px] lg:mt-[150px] gap-[111px]'>
                        <div>
                            <div className=''>
                                <h1 className='text-[35px] headwind font-medium text-[#00194A] mb-[30px]'>Sharing Cool Stuff With Your Community</h1>
                                <p className='text-lg font-light headerPara'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                    <br />
                                    <br />


                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </p>

                            </div>

                        </div>
                        <div className='lg:flex gap-[30px] items-center'>

                            <div>
                                <div className="pt-[37.4px] px-5 pb-[30px] lg:w-[260px] h-[249px] bg-base-100 shadow-xl CardShadow">
                                    <div className="">
                                        <img src={Security} className='w-[41.918px] h-[47.909px]' alt="" />

                                        <h1 className=' mt-[26px] text-secondary text-lg font-medium headwind mb-[15px]'>Security by Default</h1>
                                        <p className='headerPara font-light text-secondary'>It is a long established fact that a reader will be distracted by the readable content.</p>

                                    </div>
                                </div>
                                <div className="pt-[37.4px] mt-[30px] px-5 pb-[30px] lg:w-[260px] h-[249px] bg-base-100 shadow-xl CardShadow">
                                    <div className="">
                                        <img src={messages} className='w-[47.586px] h-[45.207px]' alt="" />

                                        <h1 className=' mt-[26px] text-secondary text-lg font-medium headwind mb-[15px]'>Say What's On Your Mind</h1>
                                        <p className='headerPara font-light text-secondary'>It is a long established fact that a reader will be distracted by the readable content.</p>

                                    </div>
                                </div>
                            </div>



                            <div className="pt-[37.4px] px-5 pb-[30px] lg:w-[260px] h-[249px] bg-base-100 shadow-xl CardShadow">
                                <div className="">
                                    <img src={doc} className='w-[41.918px] h-[47.909px]' alt="" />

                                    <h1 className=' mt-[26px] text-secondary text-lg font-medium headwind mb-[15px]'>Document Share</h1>
                                    <p className='headerPara font-light text-secondary'>It is a long established fact that a reader will be distracted by the readable content.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Keep In Touch With The Groups Of People. */}

                <section>
                    <div className='grid lg:grid-cols-2 gap-[64px] items-center lg:px-[150px]'>
                        <div className='lg:w-[600px] lg:h-[600px] w-[280px] h-[357px]'>
                            <img src={womenGroup} className='' alt="" />

                        </div>
                        <div>

                            <div className=''>
                                <h1 className='text-[35px] headwind font-medium text-[#00194A] mb-[30px]'>Keep In Touch With The Groups Of People.</h1>
                                <p className='text-lg font-light headerPara'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                    <br />
                                    <br />


                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>



                <section>

                    <div
                        className="bg-[#00194A] p-5 lg:p-0 text-white rounded-[25px] mt-[50px] lg:mt-[179px] lg:mx-[150px] lg:py-[50px]   lg:items-center" >
                        <div className=" text-center">
                            <h1 className=" lg:text-[35px] font-medium headwind">
                                Let’s Start With Quick App

                            </h1>

                            <p className="mx-auto  max-w-[580px] text-[#FFF]  mt-4 headerPara">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>

                            <div className="mt-8 flex flex-wrap lg:w-[275px]   justify-center gap-4">
                                <a
                                    className="block w-full logoIcon font-bold rounded-[30px] border  bg-primary px-12 py-3 text-sm  text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="/get-started"
                                >
                                    Request For Early Access
                                </a>


                            </div>
                        </div>
                    </div>
                </section>






                <div className='md:flex lg:px-[150px] lg:my-[80px] my-[50px] justify-between p-2 text-[#00194A]'>
                    <div>
                        <p className='text-lg headwind font-medium'>© Telegraph. 2020 — All rights reserved.</p>
                    </div>
                    <div className='flex gap-6 text-[16px] headwind font-medium lg:justify-start justify-center text-[#00194A]'>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>




            </Container>



        </>
    );
};

export default Home;