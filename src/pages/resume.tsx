import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ── EmailJS Config ───────────────────────────────
const EMAILJS_SERVICE_ID = 'service_8hkx6fr'
const EMAILJS_TEMPLATE_ID = 'template_eaxdlom'
const EMAILJS_PUBLIC_KEY = 't5zc3q1UKCWJqpW2G'

// ── Resume Gate Modal ────────────────────────────
function ResumeModal({ onClose }: { onClose: () => void }) {
   const [name, setName] = useState('')
   const [company, setCompany] = useState('')
   const [email, setEmail] = useState('')
   const [note, setNote] = useState('')
   const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus('sending')

      try {
         await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
               name: name,
               company: company,
               downloader_email: email,
               note: note.trim() || 'No note provided.',
            },
            EMAILJS_PUBLIC_KEY
         )

         setStatus('done')

         // Trigger resume download
         const link = document.createElement('a')
         link.href = '/portfolio-site/resume.pdf'
         link.download = 'Kaylee_Hayes_Resume.pdf'
         document.body.appendChild(link)
         link.click()
         document.body.removeChild(link)

      } catch {
         setStatus('error')
      }
   }

   return (
      <div className="modal-overlay" onClick={onClose}>
         <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

            {status === 'done' ? (
               <div className="modal-success">
                  <div className="deco-line" />
                  <p className="section-label">Thank You</p>
                  <h3 className="modal-title">Your download is starting.</h3>
                  <p className="modal-body">
                     Thank you for your interest — Kaylee will be in touch soon.
                  </p>
                  <div className="deco-line" />
               </div>
            ) : (
               <>
                  <div className="deco-line" />
                  <p className="section-label">Resume</p>
                  <h3 className="modal-title">Download Resume</h3>
                  <p className="modal-body">
                     Please fill out the fields below. The download will begin automatically on submission.
                  </p>
                  <div className="deco-line" />

                  <form className="modal-form" onSubmit={handleSubmit}>
                     <div className="form-field">
                        <label htmlFor="dl-name">
                           Name <span className="required">*</span>
                        </label>
                        <input
                           id="dl-name"
                           type="text"
                           required
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Jane Smith"
                        />
                     </div>

                     <div className="form-field">
                        <label htmlFor="dl-company">
                           Company <span className="required">*</span>
                        </label>
                        <input
                           id="dl-company"
                           type="text"
                           required
                           value={company}
                           onChange={(e) => setCompany(e.target.value)}
                           placeholder="Company or Publication"
                        />
                     </div>

                     <div className="form-field">
                        <label htmlFor="dl-email">
                           Email Address <span className="required">*</span>
                        </label>
                        <input
                           id="dl-email"
                           type="email"
                           required
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="your@email.com"
                        />
                     </div>

                     <div className="form-field">
                        <label htmlFor="dl-note">
                           Note <span className="optional">(optional)</span>
                        </label>
                        <textarea
                           id="dl-note"
                           rows={4}
                           value={note}
                           onChange={(e) => setNote(e.target.value)}
                           placeholder="Introduce yourself or leave a message..."
                        />
                     </div>

                     {status === 'error' && (
                        <p className="form-error">Something went wrong. Please try again.</p>
                     )}

                     <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === 'sending'}
                     >
                        {status === 'sending' ? 'Sending...' : 'Download Resume →'}
                     </button>
                  </form>
               </>
            )}
         </div>
      </div>
   )
}

// ── Resume Page ──────────────────────────────────
function Resume() {
   const [modalOpen, setModalOpen] = useState(false)

   return (
      <>
         <section className="page-section">
            <div className="section-inner">
               <p className="section-label">Resume</p>
               <div className="deco-divider">
                  <span /><span className="deco-diamond">◆</span><span />
               </div>
               <h2 className="section-title">Resume</h2>
               <p className="body-text">
                  Interested in working together? Download my resume to learn more
                  about my experience, credentials, and work.
               </p>
               <button className="download-btn" onClick={() => setModalOpen(true)}>
                  Download Resume
               </button>
            </div>
         </section>

         {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
      </>
   )
}

export default Resume