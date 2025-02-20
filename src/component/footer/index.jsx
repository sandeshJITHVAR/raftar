import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Bid n Win", href: "/bid-win" },
    { title: "Entertainment", href: "/entertainment" },
    { title: "Politics", href: "/politics" },
    { title: "Education", href: "/education" },
    { title: "Business", href: "/business" },
    { title: "Religion", href: "/religion" }
  ];

  const newsCategories = [
    { title: "Sports", href: "/news/sports" },
    { title: "States", href: "/news/states" },
    { title: "Entertainment", href: "/news/entertainment" },
    { title: "Politics", href: "/news/politics" },
    { title: "Education", href: "/news/education" },
    { title: "Business", href: "/news/business" },
    { title: "Religion", href: "/news/religion" }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaWhatsapp, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" }
  ];
  return (
    <>

      <footer className="bg-black text-white px-4 md:px-6 lg:px-8  py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-2.5">
          {/* About Us Section */}
          <div className="px-4 pb-5 lg:pb-0 lg:py-2.5  border-b lg:border-0 lg:border-r border-[#FFFFFF52]/30 flex flex-col gap-y-5">
            <div className='flex flex-col gap-1.5'>
              <h2 className="text-2xl font-normal">About Us</h2>
              <p className="text-base">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
              </p>
            </div>


            <div className='flex flex-col gap-y-2.5 text-base'>
              <div className="flex  items-center gap-2.5">
                <span className='text-2xl'><CgMail /> </span>
                <p className="">informeddaily@Support.Com</p>
              </div>

              <div className="flex items-center gap-2.5">
                <span className='text-xl'><FiPhoneCall /> </span>
                <p className="">+91 647-538 21</p>
              </div>

            </div>
            <div className="flex gap-[10px]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-primary p-3 rounded-full text-lg hover:bg-red-700 transition-colors"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 pb-5 lg:pb-0  py-2.5  px-4 border-b lg:border-0  lg:border-r border-[#FFFFFF52]/30">

            <div className=' flex flex-col gap-2.5'>
              <h2 className="text-2xl font-medium">Links</h2>
              <div className='flex flex-col gap-3.5'>
                {footerLinks.map((link, index) => (
                  <Link href={link.href} key={index} className="text-base">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className=' flex flex-col gap-2.5'>
              <h2 className="text-2xl font-medium">News</h2>
              <div className='flex flex-col gap-3.5'>
                {newsCategories.map((link, index) => (
                  <Link href={link.href} key={index} className="text-base">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="px-4 py-5  flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">Subscribe To Updates</h2>
            <p className="text-base font-normal">
              Never miss a breaking story! Get daily updates on business, politics, education, and more—straight to your inbox
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-4 bg-white text-black rounded"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
}
