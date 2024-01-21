"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import SidebarSubElement from "./SidebarSubElement";

type MenuItemProp = {
  title: string;
  icon: string;
  url?: string;
  subelements?: {
    title: string;
    url: string;
  }[];
};

export default function SidebarMenuItem({ menuItem }: { menuItem: MenuItemProp }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {menuItem.url === undefined ? (
        <motion.div initial={false} animate={open ? "open" : "closed"}>
          <div className='flex gap-1 items-center'>
            <Image src={menuItem.icon} alt='' width={24} height={24} />
            <button
              className={cn("p-1", open && "bg-gradient-to-r from-green-500 to-blue-500 rounded-sm text-white")}
              onClick={() => setOpen((prev) => !prev)}
            >
              {menuItem.title}
            </button>
          </div>
          <nav className={cn("hidden", { "flex flex-col items-start gap-1 pl-3 border-l-2": open })}>
            <SidebarSubElement subelement={menuItem.subelements} />
          </nav>
        </motion.div>
      ) : (
        <div
          className={cn(
            "flex gap-1 items-center",
            pathname === menuItem.url && "bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white"
          )}
        >
          <Image src={menuItem.icon} alt='' width={24} height={24} />
          {pathname === `/dashboard/${menuItem.url}` && (
            <motion.span
              initial={false}
              animate={pathname === menuItem.url ? "open" : "closed"}
              className='w-2 h-2 bg-green-600 rounded-full inline-block'
            ></motion.span>
          )}
          <Link className='p-1' href={`/dashboard/${menuItem.url}`}>
            {menuItem.title}
          </Link>
        </div>
      )}
    </>
  );
}
