import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarProfile from "./SidebarProfile";

export default function Sidebar() {
  return (
    <div className='w-80 flex flex-col items-center bg-zinc-100 min-h-screen text-slate-600 divide-y-2'>
      <SidebarHeader />
      <SidebarMenu />
      <SidebarProfile />
    </div>
  );
}
