interface NewsItem {
  author: string;
  readTime: string;
  title: string;
  img: string;
  tag?: string;
}

const newsData: NewsItem[] = [
  /* ... same data as before ... */
];

const WhatsNew: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-black">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter flex items-center gap-4">
          What's 
          <span className="inline-block h-[60px] w-[90px] rounded-2xl overflow-hidden border">
            <img src="/api/placeholder/200/150" className="object-cover" alt="" />
          </span> 
          New
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[40px]">
              <img src={item.img} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm font-bold">
              <span>{item.author}</span>
              <span className="text-zinc-400">⏱ {item.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;