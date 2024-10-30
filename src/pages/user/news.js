import React, { useState } from 'react';
// import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, image } from "@nextui-org/react";
import { Kanit } from '@next/font/google'
import Image from "next/image";
import imgHome from "@/images/img-1.jpg";
import Logo from "@/images/logo-cp.png";
import News from "@/images/news1.jpeg";
import {
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";

function news() {
    return (
        <div>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                <Link href='/user/home'>
                        <Image src={Logo}
                            width={120}
                            height={160}
                            className="object-cover"
                            alt="logo" /></Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/user/req" className='hover:text-[#0F75BC]'>
                            แจ้งซ่อมออนไลน์
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link color="foreground" href="/user/check" className='hover:text-[#0F75BC]'>
                            ตรวจสอบสถานะการซ่อม
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href="/user/review"color="foreground" className='hover:text-[#0F75BC] ' aria-current="page">
                            แบบประเมินความพึงพอใจ
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/user/news" className='hover:text-[#0F75BC] ' aria-current="page">
                            ข่าวสาร
                        </Link>
                    </NavbarItem>
                    
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/admin/login" variant="flat">
                            Admin Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className=" min-h-screen relative">
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    ข่าวสาร</h2>
                <div className='flex justify-center'>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow-xl m-10 animate-fade-right animate-once animate-ease-linear">
                        <figure>
                            <Image src={News}
                            ></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">
                                หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1
                            </h2>
                            <p className='text-sm'>หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง</p>
                            <div className="card-actions justify-end">
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    อ่านต่อ
                                </Button>
                            </div>
                        </div>
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

export default news