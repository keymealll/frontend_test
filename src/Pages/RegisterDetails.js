import { CiCircleQuestion } from 'react-icons/ci';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoCodepen } from 'react-icons/io'
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function RegisterDetails() {

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
                        <div className='h-8 w-[0.18rem] bg-gray-300 absolute right-[21.91rem]'></div>
                        <div className='flex items-center mt-8'>
                            <div className='mr-2 w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center'>
                                <HiOutlineDocumentCheck className='text-xl text-white' />
                            </div>
                            <p className='text-xs text-slate-700 font-semibold'>Register</p>
                        </div>

                        {/* form    */}
                    </div>
                    <div className='w-[25rem] bg-white h-[85vh] rounded-lg shadow-md px-8 py-4 overflow-auto'>
                        <p className='font-semibold text-gray-700 mb-5'>
                            Input Data Perusahaan
                        </p>
                        <form>
                            <select className='input-control'>
                                <option>Bidang Usaha *</option>
                            </select>
                            <input
                                type={'text'}
                                className='input-control'
                                placeholder='Nama perusahaan *'
                            />
                            <input
                                type={'text'}
                                className='input-control'
                                placeholder='NPWP Perusahaan *'
                            />
                            <input
                                type={'text'}
                                className='input-control'
                                placeholder='Alamat Sesuai NPWP *'
                            />
                            <select className='input-control'>
                                <option>Provinsi *</option>
                            </select>
                            <select className='input-control'>
                                <option>Kota/Kabupaten *</option>
                            </select>
                            <select className='input-control'>
                                <option>Kecamatan *</option>
                            </select>
                            <input
                                type={'text'}
                                className='input-control'
                                placeholder='Kode Pos *'
                            />
                            <p className='text-xs font-bold mb-4 mt-4'>Upload Kelengkapan Data</p>
                            <span className='bg-sky-400 text-xs text-white font-semibold w-full block py-1 px-2 rounded-t-md'>
                                <HiOutlineDocumentText className='mb-1 inline text-base' /> NIB
                            </span>
                            <label>
                                <div className='flex flex-col justify-center items-center pt-2 pb-10 border-2 rounded-b-md cursor-pointer hover:shadow-md '>
                                    <FaCloudUploadAlt className='text-2xl' />
                                    <p className='text-xs font-semibold'>Upload NIB Valid</p>
                                </div>
                                <input type={'file'} className='hidden' />
                            </label>
                        </form>
                        <Link to='/Register/1'>
                            <button
                                className='bg-orange-400 text-xs p-2 text-white rounded-md w-full mt-2 hover:bg-orange-500'>
                                Selanjutnya
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}