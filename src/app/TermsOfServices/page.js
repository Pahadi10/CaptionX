import Head from 'next/head';
import Link from 'next/link';

function TermsOfService() {
  return (
    <div>
      <Head>
        <title>Terms of Service - CaptionX</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>

        <p className="mt-4">
          Last updated: [30-10-2023]
        </p>

        <h2 className="text-xl font-semibold mt-8">Acceptance of Terms</h2>
        <p className="mt-4">
          Welcome to CaptionX. By using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully.
        </p>
        
        <h2 className="text-xl font-semibold mt-8">Use Of the service</h2>
        <p className="mt-4">
          Welcome to CaptionX. By using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully.
        </p>
        <ul style={{ listStyleType: 'disc', color: 'white' }} className="mt-3 ml-8">
            <li>You must be at least 13 years old to use our services.</li>
            <li>You are responsible for any content you upload to our website.</li>
            <li>You agree not to use our services for any illegal or unauthorized purposes</li>
          </ul>

        <h2 className="text-xl font-semibold mt-8">Privacy Policy</h2>
        <p className="mt-4">
        Your use of our services is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-8">User-Generated Content</h2>
        <ul style={{ listStyleType: 'disc', color: 'white' }} className="mt-3 ml-8">
            <li>By uploading content to our website, you grant us a non-exclusive license to use, display, and distribute that content.</li>
            <li>You agree not to upload content that violates any copyright, trademark, or privacy rights.</li>
          </ul>

        <h2 className="text-xl font-semibold mt-8">Changes to Terms</h2>
        <p className="mt-4">
        We may update these Terms of Service from time to time. Any changes will be posted on this page with a revised "Last updated" date. Your continued use of our services after any changes constitute acceptance of the updated terms.
        </p>
  
        <h2 className="text-xl font-semibold mt-8">Contact Us</h2>
        <p className="mt-4">
        If you have any questions, concerns, or requests related to these Terms of Service, please contact us at niteshuttarakhandi@gmail.com.
        </p>

      </div>
    </div>
  );
}

export default TermsOfService;
