const prWork = [
   {
      tag: 'PR & Media',
      title: 'Press Releases & Media Kits',
      desc: 'A selection of press releases and media advisories crafted for various clients and contexts — clear, strategic, and built to get coverage.',
      link: '#',
   },
   {
      tag: 'Photography',
      title: 'Visual Media & Photography',
      desc: 'Editorial and creative photography spanning portraiture, shoot direction, and visual storytelling — including work produced for Trope Magazine.',
      link: '#',
   },
]

function PRVisualMedia() {
   return (
      <section className="page-section">
         <div className="section-inner">
            <p className="section-label">Media</p>
            <div className="deco-divider">
               <span /><span className="deco-diamond">◆</span><span />
            </div>
            <h2 className="section-title">PR + Visual Media</h2>
            <div className="work-grid">
               {prWork.map((item) => (
                  <article className="work-card" key={item.title}>
                     <div className="work-card-tag">{item.tag}</div>
                     <h3 className="work-card-title">{item.title}</h3>
                     <p className="work-card-desc">{item.desc}</p>
                     <a href={item.link} className="work-card-link">View Work →</a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   )
}

export default PRVisualMedia