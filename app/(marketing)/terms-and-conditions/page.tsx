import {Footer} from "@/app/(marketing)/_components/footer";

const Page = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F] p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Secondbrain. These Terms and Conditions outline the rules and regulations for the use of our application.
          By accessing or using Secondbrain, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting the revised terms in the application. Your continued use of the application after changes are made constitutes your acceptance of the new Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Responsibilities</h2>
        <p className="mb-4">
          You agree to use the application only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use the application:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>In any way that violates any applicable local, national, or international law.</li>
          <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the application.</li>
          <li>To transmit any advertising or promotional material, including any "junk mail," "chain letter," or "spam." </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, features, and functionality in the application, including but not limited to text, graphics, logos, and software, are the exclusive property of Secondbrain or its licensors and are protected by applicable copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by applicable law, Secondbrain shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Your access to or use of, or inability to access or use, the application.</li>
          <li>Any conduct or content of any third party on the application.</li>
          <li>Any content obtained from the application.</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Indonesian, without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at:
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
