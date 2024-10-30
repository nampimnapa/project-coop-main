import React, { Fragment, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, image, Input, RadioGroup, Radio, Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import imgHome from "@/images/img-1.jpg";
import Logo from "@/images/logo-cp.png";
import { Kanit } from '@next/font/google';
import { Dialog, Transition } from '@headlessui/react'
import { EyeSlashFilledIcon, EyeFilledIcon } from '@/pages/user/icon'
import {
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';
import Link from "next/link";



function login() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();


    const handleLogin = () => {
        // ทำสิ่งที่คุณต้องการเมื่อกดปุ่มเข้าสู่ระบบ
        setLoggedIn(true);
        

    };


    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                <Link href='../user/home'>
                        <Image src={Logo}
                            width={120}
                            height={160}
                            className="object-cover"
                            alt="logo" /></Link>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                            <Button as={Link} color="primary" href="../user/home" variant="flat">
                                กลับหน้าหลัก
                            </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="hero min-h-screen max-w-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full bg-gradient-to-b from-[#0F75BC] to-blue-200 h-full">
                

                    {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">เข้าสู่ระบบ</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                    <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  animate-fade animate-once animate-ease-linear'>
                        <form className="card-body">
                            <div className="form-control">
                                <p className='text-center font-bold'>เข้าสู่ระบบ</p>
                                <div className='mt-4'>
                                    <Input type="text" label="ชื่อผู้ใช้งาน" placeholder="" />
                                </div>
                                <div className='mt-4'>
                                    <Input
                                        label="รหัสผ่าน"
                                        placeholder=""
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="max-w-xs"
                                    />
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">ลืมรหัสผ่าน?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <Link href='/admin/check'>
                                <button className="btn btn-info text-white" onClick={handleLogin}>เข้าสู่ระบบ</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer p-10 bg-neutral text-neutral-content ">
                <aside>
                    <Image src={Logo}
                        width={120}
                        height={160}
                        className="object-cover"
                        alt="logo" />
                    <p className='mt-2'>
                        วิทยาลัยการคอมพิวเตอร์
                        123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002</p>
                    <div className='flex items-center'>
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        043-009700 ต่อ 44456, 44459, 44457
                    </div>
                    <div className='flex items-center'>
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <p>computing.kku@kku.ac.th</p></div>

                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://youtube.com/@collegeofcomputingkku8752?si=gppPwXdYZqeKd89v'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href='https://www.facebook.com/computing.kku/about?locale=th_TH'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <a href='https://www.facebook.com/computing.kku/about?locale=th_TH'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18c.247.31.494.622.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.382 8.382 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018z" /></svg></a>

                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default login