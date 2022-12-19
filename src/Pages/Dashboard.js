import { BsQuestionCircle } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { TiDocumentText } from 'react-icons/ti'
import { RiHandCoinLine } from 'react-icons/ri'
import { MdOutlineArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { SlHandbag, SlBasket } from 'react-icons/sl';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { IoLogoCodepen } from 'react-icons/io'
import PieChart from '../Charts/pie-chart'
import ChartSales from '../Charts/chart-sales'

export default function Dashboard() {
    return (
        <>
            <div className="h-screen w-screen bg-indigo-50 grid grid-cols-5">
                {/* sidebar */}
                <div className="col-span-1">
                    <div className='w-full bg-white h-full border-r-2 border-gray-300 relative flex items-center'>
                        <span className='w-20 ml-5 absolute top-0 text-6xl my-auto'><IoLogoCodepen className='inline text-sky-400' /></span>
                        {/* <img src='logo192.png' className='w-20 ml-5 absolute top-0' alt='logo' /> */}
                        <div className='px-5 w-full'>
                            <div
                                className='list-navbar-active'
                            >
                                <AiOutlineHome className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>Homepage</p>
                            </div>
                            <div
                                className='list-navbar'
                            >
                                <SlHandbag className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>Sales</p>
                            </div>
                            <div
                                className='list-navbar'
                            >
                                <MdOutlineInventory2 className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>Inventory</p>
                            </div>
                            <div
                                className='list-navbar'
                            >
                                <SlBasket className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>Purchase</p>
                            </div>
                            <div
                                className='list-navbar'
                            >
                                <BiUserCircle className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>User Management</p>
                            </div>
                            <div className='list-navbar'>
                                <AiOutlineLogout className='mb-1 mr-4 text-lg' />
                                <p className='font-semibold'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* content */}
                <div className="col-span-4 h-screen overflow-auto">
                    <nav className="bg-white p-2 w-full z-10">
                        <div className='flex items-center justify-end px-5 gap-3'>
                            <BsQuestionCircle className='text-xl mb-1' />
                            <AiOutlineMail className='text-2xl mb-1' />
                            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
                            <div className='font-[500]'>
                                <p className=' text-gray-700'>Roman Dimitri</p>
                                <p className='text-gray-700 text-xs mt-0'>owner</p>
                            </div>
                        </div>
                    </nav>
                    <div className='py-7 px-5'>
                        <div>
                            <h1 className='text-gray-700 font-bold text-xl mb-2'>Order Statistic</h1>
                            <div className='w-100 grid grid-cols-4 gap-3'>
                                <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                                    <div>
                                        <p className='font-bold text-xs text-gray-700'>Total Selling</p>
                                        <p className='font-bold text-2xl text-gray-700 mt-3'>890</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <IoIosArrowUp className='text-xl text-sky-500' />
                                        <p className='font-bold text-sky-500'>20.5%</p>
                                    </div>
                                </div>
                                <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                                    <div>
                                        <p className='font-bold text-xs text-gray-700'>Expired Inventory</p>
                                        <p className='font-bold text-2xl text-gray-700 mt-3'>5</p>
                                    </div>
                                </div>
                                <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                                    <div>
                                        <p className='font-bold text-xs text-gray-700'>Out of stock Inventory</p>
                                        <p className='font-bold text-2xl text-gray-700 mt-3'>12</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-5 grid grid-cols-3 gap-3'>
                            <div className='col-span-2 bg-white border-2 border-slate-200 gap-5 rounded-lg px-5 py-3'>
                                <div className='flex justify-between items-end'>
                                    <h1 className='font-bold text-gray-700 text-xl'>Sales and Purchase</h1>
                                    <BsThreeDotsVertical className='text-lg text-gray-700' />
                                </div>
                                <div className='bg-black p-1 w-16 flex mx-auto rounded-md items-center'>
                                    <FiArrowUpRight className='text-green-600 text-sm' />
                                    <p className='text-white text-xs ml-1'>23.5%</p>
                                </div>
                                <div className='grid grid-cols-12 gap-3 mt-2'>
                                    <ChartSales />
                                </div>
                                <div className='flex justify-between mt-10'>
                                    <div className='flex justify-start'>
                                        <div className='text-center'>
                                            <p className='text-gray-700 text-sm font-semibold'>Target</p>

                                            <p className='text-green-400 text-xs font-semibold'> <MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />231</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div className='text-center'>
                                            <p className='text-gray-700 text-sm font-semibold'>Last Week</p>
                                            <p className='text-red-400 text-xs font-semibold'><MdArrowDropDown className='text-red-400 mx-auto text-lg inline' />232</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div className='text-center'>
                                            <p className='text-gray-700 text-sm font-semibold'>Last Month</p>
                                            <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />2314</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div className='text-center'>
                                            <p className='text-gray-700 text-sm font-semibold'>This Year</p>
                                            <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />8126</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-rows-3 gap-2'>
                                <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                    <GiProgression className='text-5xl text-blue-500' />
                                    <div className='text-right'>
                                        <p className='font-bold text-xs text-gray-700'>Total Transaksi</p>
                                        <p className='text-lg text-gray-700 font-bold'>Rp. 80.000.000</p>
                                    </div>
                                </div>
                                <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                    <TiDocumentText className='text-5xl text-blue-500' />
                                    <div className='text-right'>
                                        <p className='font-bold text-xs text-gray-700'>Sales</p>
                                        <p className='text-lg text-gray-700 font-bold'>289</p>
                                    </div>
                                </div>
                                <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                    <RiHandCoinLine className='text-5xl text-blue-500' />
                                    <div className='text-right'>
                                        <p className='font-bold text-xs text-gray-700'>Purchase</p>
                                        <p className='text-lg text-gray-700 font-bold'>289</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-full mt-5 grid grid-cols-2 gap-10'>
                            <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                                <div className='flex justify-between items-end mb-5'>
                                    <p className='font-bold text-lg text-gray-700'>Inventory</p>
                                    <BsThreeDotsVertical className='text-lg text-gray-700' />
                                </div>
                                <div className='px-2'>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>New Order</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>Prepare Order</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>Waiting Pickup</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>12</div>
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>Sent</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>9</div>
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>Cancel</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>7</div>
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <p className='text-gray-500 font-[500]'>Done</p>
                                        <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>5</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                                <div className='mb-5'>
                                    <p className='font-bold text-lg text-gray-700'>Persentase Penjualan</p>
                                    <PieChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}