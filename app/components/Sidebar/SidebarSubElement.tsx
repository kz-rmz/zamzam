"use clien";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SubelementProp = {
  title: string;
  url: string;
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 30,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export default function SidebarSubElement({ subelement }: { subelement?: SubelementProp[] }) {
  const pathname = usePathname();
  return (
    <>
      {subelement?.map((subelement: SubelementProp) => {
        return (
          <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={subelement.title}
            className='p-2 flex gap-2 items-center'
          >
            {pathname === `/dashboard/${subelement.url}` && (
              <span className='w-2 h-2 bg-green-600 rounded-full inline-block'></span>
            )}
            <Link href={`/dashboard/${subelement.url}`}>{subelement.title}</Link>
          </motion.div>
        );
      })}
    </>
  );
}
