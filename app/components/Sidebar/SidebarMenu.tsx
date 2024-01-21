import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    title: "Уведомления",
    icon: "/assets/icons/messages.svg",
    subelements: [
      {
        title: "Купоны",
        url: "coupons",
      },
      {
        title: "Сообщения",
        url: "messages",
      },
    ],
  },
  {
    title: "Компания",
    icon: "/assets/icons/company.svg",
    subelements: [
      {
        title: "Логотип",
        url: "branding",
      },
      {
        title: "Фотогалерея",
        url: "gallery",
      },
      {
        title: "Контактные данные",
        url: "contacts",
      },
      {
        title: "Сотрудники",
        url: "staff",
      },
    ],
  },
  {
    title: "Информация о туре",
    icon: "/assets/icons/tour.svg",
    subelements: [
      {
        title: "Что входит",
        url: "includes",
      },
      {
        title: "Необходимые документы",
        url: "required-docs",
      },
      {
        title: "Отель",
        url: "hotel",
      },
      {
        title: "Скидка",
        url: "discount",
      },
    ],
  },
  {
    title: "Шаблон",
    icon: "/assets/icons/template.svg",
    url: "template",
  },
  {
    title: "Слоты",
    icon: "/assets/icons/slots.svg",
    url: "slots",
  },
  {
    title: "Маркетинг",
    icon: "/assets/icons/marketing.svg",
    url: "marketing",
  },
];

export default function SidebarMenu() {
  return (
    <nav className='flex flex-col w-full px-5 text-lg pt-4'>
      {menuItems.map((menuItem) => {
        return <SidebarMenuItem key={menuItem.title} menuItem={menuItem} />;
      })}
    </nav>
  );
}
