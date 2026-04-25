const projects = [
   {
      tag: 'Editorial',
      title: 'Trope Magazine',
      desc: 'Served as consulting Editor in Chief and Co-Chair of the Writing Department for the inaugural issue of Trope — a student-run editorial photography and literature magazine based in Waco, TX. Directed three shoots and played a major role in the production of each.',
      link: '#',
   },
   {
      tag: 'Business',
      title: 'Kurated',
      desc: 'Founder and creative director of Kurated, a sustainable curation and styling business operating online and through partnerships and pop-ups. Every garment and accessory is secondhand — sourced through donations, thrift shops, garage sales, and deadstock. Seasonal drops feature one-of-a-kind upcycled pieces, proving that a remarkable closet can be 99% secondhand. Kurated is rooted in sustainability, carbon footprint reduction, and a commitment to combating human trafficking.',
      link: '#',
   },
   {
      tag: 'Concept',
      title: 'Elara Vestis',
      desc: 'Creator of Elara Vestis — a concept and mockup for a style-forward social media app blending the best of Pinterest, TikTok, and AI. Designed to build an immersive style community where users can create boards, shop directly from curated closets, and connect through personal style. Sellers operate on a subscription model, all contracted through the platform.',
      link: '#',
   },
]

function Projects() {
   return (
      <section className="page-section">
         <div className="section-inner">
            <p className="section-label">Work</p>
            <div className="deco-divider">
               <span /><span className="deco-diamond">◆</span><span />
            </div>
            <h2 className="section-title">Projects</h2>
            <div className="work-grid">
               {projects.map((project) => (
                  <article className="work-card" key={project.title}>
                     <div className="work-card-tag">{project.tag}</div>
                     <h3 className="work-card-title">{project.title}</h3>
                     <p className="work-card-desc">{project.desc}</p>
                     <a href={project.link} className="work-card-link">Learn More →</a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Projects