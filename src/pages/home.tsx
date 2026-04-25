function Home() {
   return (
      <>
         {/* Hero */}
         <header className="hero">
            <div className="hero-inner">
               <div className="deco-line" />
               <p className="hero-eyebrow">Portfolio</p>
               <h1 className="hero-title">Kaylee Hayes</h1>
               <p className="hero-subtitle">Journalist &nbsp;·&nbsp; Editor &nbsp;·&nbsp; Creative Director</p>
               <div className="deco-line" />
            </div>
         </header>

         {/* About */}
         <section className="section">
            <div className="section-inner">
               <p className="section-label">About</p>
               <div className="deco-divider">
                  <span /><span className="deco-diamond">◆</span><span />
               </div>
               <h2 className="section-title">About Me</h2>
               <p className="body-text">
                  A 23-year-old small town girl from Kerrville, TX — with very big dreams and an
                  incredible eye for aesthetic. Poynter/ACES certified copy editor and writer with over
                  five years of undergraduate study at Baylor University. Beyond editorial work, Kaylee
                  is a photographer, content creator, and stylist whose projects span print media,
                  sustainable fashion, and digital innovation. Whether shaping a story on the page,
                  directing a shoot, or building a brand from the ground up, she brings the same
                  precision and vision to everything she touches. Available to travel with expenses covered.
               </p>
            </div>
         </section>
      </>
   )
}

export default Home