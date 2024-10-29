import {Footer} from "@/app/(marketing)/_components/footer";

const Page = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F] p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and share information about you when you use our application, Secondbrain. By using our services, you agree to the collection and use of information in accordance with this policy.
        </p>

        <p className="mb-4">
          <strong>Effective Date:</strong> October 29, 2024
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
        <p className="mb-4">
          When you sign up and use our application, we collect the following information:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Personal Information:</strong> Your name and email address through OAuth authentication via Google and GitHub.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our application, including preferences and usage patterns.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We may use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide, maintain, and improve our application.</li>
          <li>To personalize your experience and deliver content that matches your interests.</li>
          <li>To communicate with you, including sending updates and promotional materials.</li>
          <li>To monitor application usage and analyze trends to enhance user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We value your privacy and do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Service Providers:</strong> Third-party companies that assist us in providing our application and services.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information to comply with legal obligations, protect our rights, or prevent fraud.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Security of Your Information</h2>
        <p className="mb-4">
          We implement reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of any inaccurate or incomplete information.</li>
          <li>Request deletion of your personal information, subject to legal exceptions.</li>
          <li>Withdraw consent to the processing of your personal information where applicable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically for any updates.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> wahyuditaruna97@gmail.com
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
