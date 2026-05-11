interface FooterColumn {
  title: string;
  links: string[];
}

const footerLinks: FooterColumn[] = [
  { title: "Services", links: ["Work", "About", "Culture"] },
  { title: "Testimonials", links: ["Blog", "Webinars", "Careers"] },
  { title: "Locations", links: ["London", "New York", "Manchester"] },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 m-3 px-6 md:px-14 rounded-[30px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-6">Stay updated</h3>
            <div className="relative max-w-md">
              <input type="text" className="w-full bg-[#222] rounded-full py-4 px-6" placeholder="Email" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#A7F3D0] text-black w-10 h-10 rounded-full">↗</button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            {footerLinks.map(col => (
              <div key={col.title} className="flex flex-col gap-2">
                <span className="font-bold text-lg mb-2">{col.title}</span>
                {col.links.map(link => (
                  <span key={link} className="text-zinc-400 hover:text-white cursor-pointer">{link}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-[14vw] font-black tracking-tighter leading-none opacity-50">Rise at Seven</h1>
      </div>
    </footer>
  );
};

export default Footer;