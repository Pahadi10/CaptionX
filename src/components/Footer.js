import Link from "next/link";

export default function Footer() {
  return (
    <footer className="Purpureus p-2 rounded-md text-white/70 p-4 mt-10">
      <div className="container mx-auto ">
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3">
          <div>
            &copy; CaptionX 2023
          </div>
          <nav className="flex gap-4">
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/TermsOfServices">Terms Of Services</Link>
            <Link href="/ContactUs">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
