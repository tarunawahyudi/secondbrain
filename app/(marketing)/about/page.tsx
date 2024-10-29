import {Footer} from "@/app/(marketing)/_components/footer";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F] p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Secondbrain</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Secondbrain is an online note-taking web application designed with a focus on simplicity and speed.
          It helps you jot down any ideas quickly and effortlessly. Secondbrain was developed by Taruna Wahyudi,
          a software engineer from Indonesia.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-white">Inspiration Behind Secondbrain</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The idea for Secondbrain was born out of necessity when I reached my usage limit on Notion, and
          the subscription cost became prohibitively expensive. Thus, Secondbrain was created as a free alternative
          accessible to the public.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-white">User Empowerment</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          One of the core philosophies of Secondbrain is user empowerment. Users can manage their storage rental
          from any provider, granting them the freedom to scale and develop Secondbrain as they see fit.
          Being an open-source software, anyone can contribute to its growth and enhancement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-white">Tech Stack</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Secondbrain is built using a variety of modern technologies, including Next.js, Tailwind CSS, TypeScript,
          Convex, Clerk, Edgestore, and many more.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-white">Support Secondbrain</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          If you appreciate my work on Secondbrain, you can show your support by donating through the Buy Me a Coffee button below
        </p>
        <Button className="bg-yellow-400 font-semibold text-black hover:text-white dark:hover:text-black" asChild>
          <Link href="https://buymeacoffee.com/tarunawahyudi" target="_blank">
            <Image
              width="18"
              height="18"
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
              className="mr-2"
            />
            Buy Me A Coffee
          </Link>
        </Button>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-white">Get in Touch</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          If you're interested in collaborating or have any inquiries, feel free to reach out to me via email at:
          <Link href="mailto:wahyuditaruna97@gmail.com">
            <strong> wahyuditaruna97@gmail.com</strong>
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
