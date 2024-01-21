import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className='flex justify-center items-center py-8'>
      <div className='p-2 rounded-full bg-slate-600'>
        <Image src={"/assets/icons/brand.svg"} alt='brand' width={32} height={32} />
      </div>
    </div>
  );
}
