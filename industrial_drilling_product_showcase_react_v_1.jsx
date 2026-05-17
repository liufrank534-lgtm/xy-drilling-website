export default function ProductShowcase() {
  const features = [
    { title: '高效钻探', desc: '动力强劲，提升钻探效率，适用于复杂工况' },
    { title: '履带移动', desc: '越野性能强，适应泥地、山区、工地环境' },
    { title: '稳定耐用', desc: '重型钢结构设计，长期连续工作' },
    { title: '支持定制', desc: '支持钻深、动力和配置定制' },
  ];

  const specs = [
    ['设备型号', 'XY系列钻机'],
    ['最大钻深', '1000m'],
    ['应用范围', '地质勘探 / 水井 / 工程施工'],
    ['动力方式', '柴油动力'],
    ['控制方式', '液压控制'],
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      <section className='py-24 px-8 text-center'>
        <div className='text-red-500 mb-3 font-semibold'>PROFESSIONAL DRILLING RIG</div>
        <h1 className='text-6xl font-bold'>XY Series Drilling Equipment</h1>
        <p className='max-w-3xl mx-auto mt-6 text-slate-400'>
          高性能钻探设备解决方案｜适用于工程施工、矿山勘探、水井项目
        </p>

        <div className='flex gap-4 justify-center mt-8'>
          <button className='bg-red-600 px-7 py-3 rounded-2xl'>Get Quote</button>
          <button className='border px-7 py-3 rounded-2xl'>WhatsApp</button>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-8 py-10'>
<h2 className='text-4xl font-bold mb-10'>产品一：XY-44A 钻探设备</h2>
<div className='grid md:grid-cols-2 gap-8 items-center'>
<img src='/mnt/data/9bb2f0bd336aade1976ef6e6c5643b(1).JPG' className='rounded-3xl h-[420px] object-cover w-full'/>
<div>
<h3 className='text-2xl font-bold mb-4'>高性能液压钻探设备</h3>
<p className='text-slate-400 mb-6'>适用于地质勘探、水井工程和复杂施工环境，支持高深度钻探。</p>
<ul className='space-y-3 text-slate-300 mb-8'>
<li>✓ 最大钻深：600m</li>
<li>✓ 液压控制</li>
<li>✓ 柴油动力</li>
<li>✓ 重型结构</li>
</ul>
<div className='bg-zinc-900 rounded-2xl overflow-hidden'>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>型号</span><span>XY‑44A</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>最大钻深</span><span>600m</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>动力形式</span><span>柴油</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>设备重量</span><span>1800kg</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>钻孔直径</span><span>325 / 200 /150 /75mm</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>转速</span><span>110–1256 r/min</span></div>
<div className='flex justify-between p-3'><span>控制系统</span><span>液压</span></div>
</div>
</div>
</div>
</section>

<section className='max-w-6xl mx-auto px-8 py-10'>
<h2 className='text-4xl font-bold mb-10'>产品二：履带式钻探设备</h2>
<div className='grid md:grid-cols-2 gap-8 items-center'>
<img src='/mnt/data/77b9b9528356f26f6c02b8b54c2d3f(2).JPG' className='rounded-3xl h-[420px] object-cover w-full'/>
<div>
<h3 className='text-2xl font-bold mb-4'>履带移动式工程钻机</h3>
<p className='text-slate-400 mb-6'>履带底盘设计，适合山区、泥地和复杂地形施工。</p>
<ul className='space-y-3 text-slate-300 mb-8'>
<li>✓ 履带行走</li>
<li>✓ 野外施工适用</li>
<li>✓ 稳定性强</li>
<li>✓ 支持定制</li>
</ul>
<div className='bg-zinc-900 rounded-2xl overflow-hidden'>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>设备类型</span><span>履带式钻机</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>底盘方式</span><span>履带底盘</span></div>
<div className='flex justify-between p-3 border-b border-zinc-800'><span>适用地形</span><span>山区/泥地/工地</span></div>
<div className='flex justify-between p-3'><span>支持</span><span>定制配置</span></div>
</div>
</div>
</div>
</section>

      <section className='max-w-6xl mx-auto py-20 px-8'>
      <h2 className='text-3xl font-bold mb-10'>核心优势</h2>
      <div className='grid md:grid-cols-4 gap-6'>
      {features.map(i=><div className='bg-zinc-900 rounded-3xl p-6'><h3 className='font-bold mb-3'>{i.title}</h3><p className='text-slate-400'>{i.desc}</p></div>)}
      </div>
      </section>



<section className='bg-red-600 mt-20 py-14 text-center'>
<h2 className='text-3xl font-bold'>立即获取报价</h2>
<p className='mt-3'>WhatsApp: +86 18503175040
<p>Email: liufrank534@gmail.com</p></p>
</section>
</div>
)}
