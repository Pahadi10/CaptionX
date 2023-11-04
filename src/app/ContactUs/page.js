import Head from 'next/head';
import Link from 'next/link';

function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us - CaptionX</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Contact Us</h1>

        <p className="mt-4">
          If you have any questions, suggestions, or need assistance, please feel free to contact us using the information below:
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className='mt-2'>
            <strong>Email:</strong> <Link href={"mailto:niteshuttarakhandi@gmail.com"}>niteshuttarakhandi@gmail.com</Link>
          </p>
          <p className='mt-2'>
            <strong>Instagram:</strong> <a href="https://www.instagram.com/nitesh_uttarakhandi/">nitesh_uttarakhandi</a> 
          </p>
          <p className='mt-2'>
            <strong>Address:</strong> Faridabad, Haryana, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
