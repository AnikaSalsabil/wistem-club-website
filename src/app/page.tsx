export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="w-full h-[90vh] bg-gradient-to-r from-purple-700 to-indigo-700 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to WiSTEM Club</h1>
        <p className="mt-4 text-lg md:text-2xl">Empowering Women in STEM</p>
      </section>

      {/* Connect With Opportunities */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">CONNECT WITH OPPORTUNITIES</h2>
        <img src="/scientist-placeholder.jpg" alt="Scientist" className="mx-auto rounded-lg shadow-md w-[90%] max-w-[600px]" />
        <p className="max-w-2xl mt-8 text-gray-600 mx-auto">
          Discover the diversity of women with science, technology, engineering and mathematics skills across Australia. 
          With your help, we connect women with career advancing opportunities.
        </p>
      </section>

      {/* About WiSTEM */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6" id="about">
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-purple-800 mb-4">ABOUT WiSTEM</h3>
          <p className="text-gray-600">
            University of Wollongong Women in STEM club strives to create a supportive community 
            for women pursuing careers in science, technology, engineering, and mathematics.
          </p>
        </div>
        <div className="flex-1">
          <img src="/wistem-placeholder.jpg" alt="WiSTEM" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="flex justify-center gap-6 py-10">
        <div className="w-40 h-40 bg-purple-100 flex items-center justify-center">IMG</div>
        <div className="w-40 h-40 bg-purple-100 flex items-center justify-center">IMG</div>
        <div className="w-40 h-40 bg-purple-100 flex items-center justify-center">IMG</div>
      </section>

      {/* Our Mission */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">OUR MISSION</h3>
        <p className="max-w-2xl text-gray-600 mx-auto">
          The Women in STEM Decadal Plan was developed with the involvement of hundreds of organisations that participated in a national consultation process undertaken by 
          the Australian Academy of Science in partnership with the Australian Academy of Technology and Engineering.
        </p>
      </section>

      {/* Sections with Background Colors */}
      <section id="events" className="w-full bg-blue-50 py-12 text-center">
        <h3 className="text-2xl font-bold text-blue-600">UPCOMING EVENTS</h3>
      </section>

      <section id="team" className="w-full bg-purple-50 py-12 text-center">
        <h3 className="text-2xl font-bold text-purple-600">ABOUT TEAM</h3>
      </section>

      <section id="sponsorship" className="w-full bg-pink-50 py-12 text-center">
        <h3 className="text-2xl font-bold text-pink-600">SPONSORSHIP</h3>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full text-center py-20">
      <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">LET&apos;S CONTACT</h3>
        <p className="text-gray-600 mb-8">Connect with opportunities</p>
        <div className="flex justify-center gap-8">
          <a href="mailto:uowwistem@gmail.com" aria-label="Email"><img src="/email-icon.svg" alt="Email" className="w-10" /></a>
          <a href="https://www.instagram.com/uow_wistem/" aria-label="Instagram"><img src="/instagram-icon.png" alt="Instagram" className="w-10" /></a>
          <a href="https://www.facebook.com/UOWWiSTEM" aria-label="Facebook"><img src="/facebook-icon.png" alt="Facebook" className="w-10" /></a>
          <a href="https://www.linkedin.com/company/uowwistem/" aria-label="LinkedIn"><img src="/linkedIn-icon.png" alt="LinkedIn" className="w-10" /></a>
        </div>
      </section>
    </div>
  );
}
