import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoCodepen } from 'react-icons/io'
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section className='h-screen overflow-hidden relative'>
            {/* navbar */}
            <div className='flex justify-between py-3 px-5'>
                <span className='cursor-pointer text-4xl my-auto'><IoLogoCodepen className='inline text-sky-400' /></span>
                <p className='text-xs inlin my-auto'><CiCircleQuestion className='inline text-2xl mb-1' /> Pusat Bantuan</p>
            </div>


            <div className='relative z-10'>
                <div className='flex mx-auto border py-5 justify-center gap-20'>
                    <div className='w-[25rem] h-[85vh] px-8 py-8 overflow-auto relative'>
                        <div className='flex items-center'>
                            <div className='mr-2 w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
                                <FaMapMarkerAlt className='text-xl text-white' />
                            </div>
                            <p className='text-xs text-slate-700 font-semibold'>
                                Pendaftaran Sarana
                            </p>
                        </div>
                        <div className='h-8 w-[0.18rem] bg-blue-500 absolute right-[21.91rem]'></div>
                        <div className='flex items-center mt-8'>
                            <div className='mr-2 w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
                                <HiOutlineDocumentCheck className='text-xl text-white' />
                            </div>
                            <p className='text-xs text-slate-700 font-semibold'>Register</p>
                        </div>
                    </div>
                    <div className='w-[25rem] bg-white h-[43vh] rounded-lg shadow-md px-8 py-4 overflow-auto'>
                        <p className='font-semibold text-gray-700 mb-5'>
                            Register Akun Olin
                        </p>
                        <form>
                            <input
                                type={'email'}
                                className='input-control'
                                placeholder='Email *'
                            />
                            <input
                                type={'password'}
                                className='input-control'
                                placeholder='Kata Sandi *'
                            />
                            <input
                                type={'password'}
                                className='input-control'
                                placeholder='Konfirmasi Kata Sandi *'
                            />
                            <div className='flex items-start'>
                                <input type={'checkbox'} className='mr-2 mt-1 p-10' />
                                <p className='text-xs text-gray-700'>
                                    Dengan membuat akun anda menyetujui{' '}
                                    <span className='text-orange-400'>
                                        Ketentuan penggunaan dan pemberitahuan Privasi
                                    </span>{' '}
                                    aplikasi OLIN
                                </p>
                            </div>
                            <div className='flex gap-3'>
                                <Link
                                    to='/register'
                                    className='border border-gray-300 text-xs p-2 text-gray-400 rounded-md w-full mt-2 hover:bg-slate-100 text-center'
                                >
                                    <button>Kembali</button>
                                </Link>

                                <Link to='/' className='bg-orange-400 text-xs p-2 text-white rounded-md mt-2 hover:bg-orange-500 w-full text-center' >
                                    <button>
                                        Register
                                    </button>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}
