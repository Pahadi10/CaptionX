import Head from "next/head";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - CaptionX</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>

        <p className="mt-4">Last updated: [30-10-2023]</p>

        <h2 className="text-xl font-semibold mt-8">Introduction</h2>
        <p className="mt-4">
          Welcome to CaptionX. We are committed to protecting your privacy and
          ensuring that your personal information is handled with care. This
          Privacy Policy outlines the types of information we collect, how we
          use it, and your choices regarding your data.
        </p>

        <h2 className="text-xl font-semibold mt-8">Information We Collect</h2>
        <h3 className="mt-4 font-semibold">User-Provided Information</h3>
        <p className="mt-4">
          When you use our website, we may collect and store information that
          you voluntarily provide, including but not limited to:
        </p>
          <ul style={{ listStyleType: 'disc', color: 'white' }} className="mt-3 ml-8">
            <li>Your name</li>
            <li>Email address</li>
            <li>Uploaded videos</li>
            <li>Captions and timestamps</li>
            <li>Caption colors and styles</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="mt-4 font-semibold">Automatically Collected Information</h3>
          <p className="mt-4">We may also collect information automatically, such as:</p>
          <ul style={{ listStyleType: 'disc', color: 'white' }} className="mt-3 ml-8">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Usage data</li>
          </ul>

        <h2 className="text-xl font-semibold mt-8">Changes to this Privacy Policy</h2>
        <p className="mt-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this Privacy Policy periodically.</p>

        <h2 className="text-xl font-semibold mt-8">Contact Us</h2>
          <p className="mt-4">If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at niteshuttarakhandi@gmail.com.</p>


      </div>
    </div>
  );
}

export default PrivacyPolicy;
