"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Music, Calendar, Mail, PlayCircle, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const videoItems = [
  {src: "https://www.youtube-nocookie.com/embed/O2_QSEqjvgA", title: "Love You Online", spotifyLink: "https://open.spotify.com/track/5jgOquEiSmryWQhctz3jFZ?si=e38ffba3212346f9"},
  {src: "https://www.youtube-nocookie.com/embed/tryQDfdF0PI", title:"You are my Mixolydian ميكسوليديان", spotifyLink: "https://open.spotify.com/track/5CwSDoozVYq5DCuPrcZbjq?si=4a5f119f183e4fbb"},
  {src: "https://www.youtube-nocookie.com/embed/zscgUPvdjno", title: "Goodbye Butterfly", spotifyLink: "https://open.spotify.com/track/45XRBdx5xDm5XAZGFwNyyZ?si=b612c76ac1784e14"}
]
export default function MusicianHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* GIF Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('./images/homepage-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          margin: "auto",
          maxWidth: "1350px",
          minWidth: "400px"
        }}
      />

      {/* App Bar */}
      <header className="relative z-20 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-3 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100}/>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="#music" className="hover:text-primary-400 transition-colors">
              Music
            </Link>
            <Link href="#tour" className="hover:text-primary-400 transition-colors">
              Tour
            </Link>
            <Link href="#contact" className="hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md py-3">
            <nav className="flex flex-col items-center space-y-4">
              <Link href="#about" className="hover:text-primary-400 transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link href="#music" className="hover:text-primary-400 transition-colors" onClick={toggleMenu}>
                Music
              </Link>
              <Link href="#tour" className="hover:text-primary-400 transition-colors" onClick={toggleMenu}>
                Tour
              </Link>
              <Link href="#contact" className="hover:text-primary-400 transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My World of Music</h1>
          <p className="text-xl md:text-2xl mb-8">Play Me A Story</p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Biography</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="mb-4">
               &quot;Throughout her studies and career, Rada was known for having a very unique sound and brilliant technique, which seemed effortless and brought  joy and comfort to the listener. Performing solo concerts in the Near East, America and Europe as well as chamber music and with orchestra, Rada was then featured in the musical documentary Hear Us, winner of the silver medal in New York TV Festival 2019, in which she was invited to perform the premiere of trio concerto by Brad Harris, alongside her costars Clarissa Bevilacqua and Daniel Kaler at Carnegie Hall, New York. The film is available on Amazon Prime and Apple TV world wide since 2023.&quot;
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/composition.jpg"
                height="300"
                width="400"
                alt="Musician looking at a composition"
                className="w-full h-auto rounded-lg shadow-lg"
                blurDataURL='/images/composition.jpg'
              />
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoItems.map((video) => (
              <div key={video.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  {/* <p className="text-gray-400 mb-4">Release Date: January 1, 202{i}</p> */}
                  <a target="_blank" href={video.spotifyLink} rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Listen on Spotify
                  </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        {/* <section id="video" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Music Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section> */}

        <section id="tour" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Rada</h2>
          <div className="space-y-4">
            {[
              { header: "Education", body: "Rada Hanana is a trained pianist, piano teacher and composer. Started learning piano at the age of four with the Russian piano teacher Svetlana Al -Shatta, one year at home then at the music school of Sulhi Al-wadi in Damascus, Syria, until she graduated at the age of 16 in 2005. In 2007 Rada entered the Higher Institute of Music and Theatrical Arts in Damascus to continue her higher education with Pro. Franqiz Haciyeva also on the Russian method of both Solo performance and music theory. At the University of Wisconsin Eau-Claire, Rada continued her musical education with Pro. Dr. Nicolas Phillips where she had a scholarship to study English and piano Solo performance. She also expanded her musical knowledge with conducting, composition, pedagogy and symphony orchestra classes, to leave and move to Germany in late 2014 where she resided in Weimar, receiving private piano lessons from 3 Professors at the Franz Liszt Musikhochschule to learn more about the recent German method of technical and theoretical piano performance and pedagogy.  In 2019 she moved to Mannheim where she resides till present day."},
              { header: "Performances", body: "In 1994 Rada Hanana gave her first public performance to continue and participate in two concerts annually, until she gave her first solo concert at the age of 19 at the High Institute of Music in Damascus. Playing solo and chamber music, Rada has performed many concerts in Syria, Lebanon, United States and Germany and continues to this day to do so." },
              { header: "Teaching", body: "At the age of 13, Rada began tutoring under the supervision of her father the violin and piano teacher Nazeer Hanana. Three years later, she began giving private piano and music theory lessons independently. At the age of 19 she became a music theory teacher of the intermediate level to 120 students between the age of 11 to 17. She was on the examination committee of the music theory exams. \nIn Lebanon 2012, she began teaching piano and music theory at the Ghassan Yammenne Music School where she was also part of the piano examination committee. \nIn Germany she started as a private teacher in Weimar, then moved to Mannheim to be a part of the music community, teaching at the Mannheimer Abendakademie community college, Klangfabrik Mannheim - Musikschule in Rheinau and the Internationale Klavier & Violineschule, working with all levels with a big variety of age (4 to 80 year olds). \nShe arranges annual concerts for her students of all levels: beginners, intermediate and advanced. "},
              { header: "Composing", body: `Since March 2020 Rada has been exploring the world of improvisation and composition. Composing for solo piano and other instruments, and integrating her love for many styles of music into her pieces. She has been experimenting with looping, no-meter music, meditative, contemporary and many which she continues to apply and discover. \n"I cannot find a better way to describe how the world influences my feelings. Sometimes a simple paragraph of a novel can produce a tornado of emotions that can only be expressed by the transparent art of music."`}
            ].map((show, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="font-semibold" style={{ textAlign: "center" }}>{show.header}</p>
                  <p className="text-gray-400">{show.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-gray-800 text-white" />
            <Input type="email" placeholder="Your Email" className="bg-gray-800 text-white" />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>
            <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-50 backdrop-blur-md py-3">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Rada Hanana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
