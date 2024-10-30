import React, { useState, useEffect, Fragment } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, image } from "@nextui-org/react";
import { Kanit } from '@next/font/google'
import Image from "next/image";
import imgHome from "@/images/img-1.jpg";
import Logo from "@/images/logo-cp.png";
import { PencilSquareIcon, EyeIcon, PlusIcon, ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import {
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Dialog, Transition } from '@headlessui/react'



import iterationCount from 'tailwindcss-animated/src/utilities/iterationCount';

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['200', '400']
})

function detail() {
    const req = {
        id: 1,
        time: "08/06/2022 16:07:17",
        name: "วาสนา",
        role: "เจ้าหน้าที่",
        tool: "อื่นๆ",
        no: "A123",
        beha: "404 not found",
        status: "รออะไหล่",
        room: '9525',
        email: 'll@kkumail.com',
        tel: '0981141174',
        othertool: 'ชักโครก',
        otherroom: '9425',
        img: "img.png"
    }
    const [selectedRadio, setSelectedRadio] = useState("2"); // ให้ค่าเริ่มต้นเป็น "รออะไหล่"
    const [isOpen, setIsOpen] = useState(false)


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <Navbar shouldHideOnScroll >
                <NavbarBrand >
                <Link href='/user/home'>
                        <Image src={Logo}
                            width={120}
                            height={160}
                            className="object-cover"
                            alt="logo" /></Link>
                </NavbarBrand>
                <NavbarContent justify="end" className='items-center'>
                    <NavbarItem>
                        <Dropdown placement="bottom-end" className={kanit.className}>
                            <DropdownTrigger>
                                <User
                                    className='items-center'
                                    variant="flat"
                                    name="แลปบอย มุจุ"
                                    description="เจ้าหน้าที่"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    }}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="logout">
                                    <Link href='/admin/login'>
                                        <div className='flex items-center'>
                                            <ArrowRightStartOnRectangleIcon class="h-6 w-6 text-gray-500" />
                                            <span className='ml-2 text-gray-500'>ออกจากระบบ</span></div>
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="min-h-screen relative flex flex-col">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm max-w-full">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        รายละเอียดการแจ้งซ่อม</h2>
                </div>
                <div className='mx-auto  mt-5 animate-wiggle-more animate-infinite animate-ease-linear'>
                    {selectedRadio === "1" && (
                        <svg className='text-info' xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity="0.3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" /></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></g></svg>
                    )}
                    {selectedRadio === "2" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 48 48">
                            <path fill="#ef6c00" d="m37.4 24.6l-11.6-2.2l-3.9-11.2l-3.8 1.3L22 23.6l-7.8 9l3 2.6l7.8-9l11.6 2.2z" />
                            <g fill="#ff9800">
                                <path d="M24 19c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 7c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2" />
                                <path d="M40.7 27c.2-1 .3-2 .3-3s-.1-2-.3-3l3.3-2.4c.4-.3.6-.9.3-1.4L40 9.8c-.3-.5-.8-.7-1.3-.4L35 11c-1.5-1.3-3.3-2.3-5.2-3l-.4-4.1c-.1-.5-.5-.9-1-.9h-8.6c-.5 0-1 .4-1 .9L18.2 8c-1.9.7-3.7 1.7-5.2 3L9.3 9.3c-.5-.2-1.1 0-1.3.5l-4.3 7.4c-.3.5-.1 1.1.3 1.4L7.3 21c-.2 1-.3 2-.3 3s.1 2 .3 3L4 29.4c-.4.3-.6.9-.3 1.4L8 38.2c.3.5.8.7 1.3.4L13 37c1.5 1.3 3.3 2.3 5.2 3l.4 4.1c.1.5.5.9 1 .9h8.6c.5 0 1-.4 1-.9l.4-4.1c1.9-.7 3.7-1.7 5.2-3l3.7 1.7c.5.2 1.1 0 1.3-.4l4.3-7.4c.3-.5.1-1.1-.3-1.4zM24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11s11 4.9 11 11s-4.9 11-11 11" />
                            </g>
                        </svg>
                    )}
                    {selectedRadio === "3" && (
                        <svg viewBox="0 0 24 24" class="text-green-600 w-24 h-24 mx-auto my-6 animate-bounce
                       ">
                            <path fill="currentColor"
                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                            </path>
                        </svg>
                    )}
                </div>
                <p className='mt-5 text-center text-xl'>
                    {selectedRadio === "1" && "รอแก้ไข"}
                    {selectedRadio === "2" && "รออะไหล่"}
                    {selectedRadio === "3" && "แก้ไขแล้ว"}
                </p>
                <RadioGroup
                    label="เปลี่ยนสถานะการแจ้งซ่อม"
                    orientation="horizontal"
                    className='mx-auto'
                    value={selectedRadio}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                >
                    <Radio value="1">รอแก้ไข</Radio>
                    <Radio value="2">รออะไหล่</Radio>
                    <Radio value="3">แก้ไขแล้ว</Radio>
                    <Button as={Link} color="primary" href="#" variant="flat" className='ml-2' onClick={openModal}>บันทึก</Button>
                </RadioGroup>
                <>
                    <Transition appear show={isOpen} as={Fragment} className={kanit.className}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                ยืนยันการเปลี่ยนสถานะการซ่อม
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    คุณต้องการยืนยันการเปลี่ยนสถานะการซ่อม
                                                </p>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <button
                                                    type="button"
                                                    className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none  "
                                                    onClick={closeModal}
                                                >
                                                    ยกเลิก
                                                </button>
                                                <Link href='/admin/check'>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none  "
                                                        onClick={closeModal}
                                                    >
                                                        ยืนยัน
                                                    </button></Link>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <div className='flex mx-4 my-5'>
                    <Card className="w-1/3 m-2">
                        <CardHeader className="flex gap-3 bg-primary text-white">
                            <div className="flex flex-col">
                                <p className="text-md">ข้อมูลผู้แจ้งซ่อม</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className='flex '>
                                <p className='font-bold pr-2'>ชื่อผู้แจ้ง :</p>
                                <p>{req.name}</p>
                            </div>
                            <div className='flex '>
                                <p className='font-bold pr-2'>สถานะ :</p>
                                <p>{req.role}</p>
                            </div>
                            <div className='flex '>
                                <p className='font-bold pr-2'>อีเมล :</p>
                                <p>{req.email}</p>
                            </div>
                            <div className='flex '>
                                <p className='font-bold pr-2'>หมายเลขติดต่อ :</p>
                                <p>{req.tel}</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-2/3 m-2">
                        <CardHeader className="flex gap-3 bg-primary text-white">
                            <div className="flex flex-col">
                                <p className="text-md">ปัญหาที่พบ</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm">{req.time}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <div className='flex'>
                                        <p className='font-bold pr-2'>อุปกรณ์ที่แจ้งซ่อม :</p>
                                        <p>{req.tool}</p>
                                    </div>
                                    <div className='flex '>
                                        <p className='font-bold pr-2'>ห้องที่พบปัญหา :</p>
                                        <p>{req.role}</p>
                                    </div>
                                    <div className='flex '>
                                        <p className='font-bold pr-2'>อาการเบื้องต้น :</p>
                                        <p>{req.email}</p>
                                    </div>
                                    <div className='flex '>
                                        <p className='font-bold pr-2'>หมายเลขเครื่อง/หมายเลขครุภัณฑ์ :</p>
                                        <p>{req.tel}</p>
                                    </div>
                                </div>
                                <div className='mr-2'>
                                    <div className='flex '>
                                        <p className='font-bold pr-2'>รูปภาพประกอบ :</p>
                                        <p>{req.img}</p>
                                    </div>
                                    <div className='mt-2'>
                                        <Image src={Logo} width={200} ></Image>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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

export default detail