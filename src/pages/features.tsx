const features = [
   {
      tag: 'Personal Narrative',
      title: 'Personal Essays',
      desc: 'Narrative nonfiction rooted in lived experience — exploring identity, place, and the stories that shape us.',
      link: '#',
   },
   {
      tag: 'Feature',
      title: 'Features & Essays',
      desc: 'In-depth feature writing and critical essays spanning culture, fashion, and the intersections in between.',
      link: '#',
   },
]

function Features() {
   return (
      <section className="page-section">
         <div className="section-inner">
            <p className="section-label">Writing</p>
            <div className="deco-divider">
               <span /><span className="deco-diamond">◆</span><span />
            </div>
            <h2 className="section-title">Features</h2>
            <div className="work-grid">
               {features.map((item) => (
                  <article className="work-card" key={item.title}>
                     <div className="work-card-tag">{item.tag}</div>
                     <h3 className="work-card-title">{item.title}</h3>
                     <p className="work-card-desc">{item.desc}</p>
                     <a href={item.link} className="work-card-link">Read More →</a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Features