import React, { Fragment, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import {
    Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, image, DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { Kanit } from '@next/font/google'
import Image from "next/image";
import imgHome from "@/images/img-1.jpg";
import Logo from "@/images/logo-cp.png";
import { PencilSquareIcon, EyeIcon, PlusIcon, ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { capitalize } from "./utils";
import {
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['200', '400']
})

const statusColorMap = {
    แก้ไขแล้ว: "success",
    รอแก้ไข: "danger",
    รออะไหล่: "warning",
};

export default function check() {
    const columns = [
        { name: "วันที่ / เวลา", uid: "time" },
        { name: "ชื่อผู้แจ้ง", uid: "name" },
        { name: "สถานะผู้แจ้ง", uid: "role" },
        { name: "อุปกรณ์ที่แจ้งซ่อม", uid: "tool" },
        { name: "ห้องที่พบปัญหา", uid: "room" },
        { name: "หมายเลขเครื่อง", uid: "no" },
        { name: "อาการเบื้องต้น", uid: "beha" },
        { name: "สถานะ", uid: "status" },
    ];
    // สถานะ : แก้ไขแล้ว รออะไหล่ กำลังแก้ไข ยังไม่ได้รับการแก้ไข

    const req = [
        {
            id: 1,
            time: "08/06/2022 16:07:17",
            name: "วาสนา",
            role: "เจ้าหน้าที่",
            tool: "คอมพิวเตอร์",
            no: "A123",
            beha: "404 not found",
            status: "รออะไหล่",
            room: '9525'
        },
        {
            id: 2,
            time: "08/06/2022 16:07:17",
            name: "วาสนา",
            role: "เจ้าหน้าที่",
            tool: "คอมพิวเตอร์",
            no: "A123",
            beha: "404 not found",
            status: "แก้ไขแล้ว",
            room: '9421'

        },
        {
            id: 3,
            time: "08/06/2022 16:07:17",
            name: "วาสนา",
            role: "เจ้าหน้าที่",
            tool: "คอมพิวเตอร์",
            no: "A123",
            beha: "404 not found",
            status: "รอแก้ไข",
            room: '9422'

        },
        {
            id: 4,
            time: "08/06/2022 16:07:17",
            name: "วาสนา",
            role: "เจ้าหน้าที่",
            tool: "คอมพิวเตอร์",
            no: "A123",
            beha: "404 not found",
            status: "รอแก้ไข",
            room: '9525'

        },
        {
            id: 5,
            time: "08/06/2022 16:07:17",
            name: "วาสนา",
            role: "เจ้าหน้าที่",
            tool: "คอมพิวเตอร์",
            no: "A123",
            beha: "404 not found",
            status: "รอแก้ไข",
            room: '9525'

        },
    ];



    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <div>{user.name}</div>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );

            default:
                return cellValue;
        }
    }, []);
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [filterValue, setFilterValue] = React.useState("");

    const statusOptions = [
        { name: "แก้ไขแล้ว", uid: "แก้ไขแล้ว" },
        { name: "รอแก้ไข", uid: "รอแก้ไข" },
        { name: "รออะไหล่", uid: "รออะไหล่" },
    ];
    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...req];
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((req) =>
                Array.from(statusFilter).includes(req.status),
            );
        }

        return filteredUsers;
    }, [req, filterValue, statusFilter]);



    return (
        <>
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
                    <NavbarItem isActive>
                        <Link  href="/user/check" className='hover:text-[#0F75BC]'>
                            ตรวจสอบสถานะการซ่อม
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href="/user/review" color="foreground" className='hover:text-[#0F75BC] ' aria-current="page">
                            แบบประเมินความพึงพอใจ
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href="/user/news" color="foreground" className='hover:text-[#0F75BC] ' aria-current="page">
                            ข่าวสาร
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                            <Button as={Link} color="primary" href="../admin/login" variant="flat">
                                Admin Login
                            </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className='flex items-center justify-between'>
                <div className='ml-5'>
                    <h1 className='text-xl font-bold'>ตรวจสอบสถานะการซ่อม</h1>
                </div>
                <div className="flex gap-3 justify-end mr-5 items-center mb-2">
                    ตัวเลือก :
                    <Dropdown className={kanit.className}>
                        <DropdownTrigger className="hidden sm:flex">
                            <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                สถานะ
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={statusFilter}
                            selectionMode="multiple"
                            onSelectionChange={setStatusFilter}
                        >
                            {statusOptions.map((status) => (
                                <DropdownItem key={status.uid} className="capitalize">
                                    {capitalize(status.name)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className=' min-h-screen relative flex flex-col'>
                <Table label="Example table with custom cells" className="flex-grow">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn
                                key={column.uid}
                                align={column.uid === "actions" ? "center" : "start"}
                                className="bg-primary text-white font-normal"
                            >
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={filteredItems}>
                        {(item) => (
                            <TableRow key={item.id} className="border-b-1 border-b-gray-100 hover:bg-blue-100 ">
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
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
        </>
    );
}

