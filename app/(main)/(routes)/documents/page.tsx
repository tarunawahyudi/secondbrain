"use client";

import Image from "next/image";
import {useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {PlusCircle} from  "lucide-react";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

const DocumentPage = () => {
  const router = useRouter();
  const {user} = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note",
    })
  }

  return (
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <Image
            src="/empty.png"
            width="300"
            height="300"
            alt="Empty"
            className="dark:hidden"
        />
        <Image
            src="/empty-dark.png"
            width="300"
            height="300"
            alt="Empty"
            className="hidden dark:block"
        />
        <h2 className="text-lg font-medium">
          Hi <b>{user?.username} 👋 </b>
          Welcome to Secondbrain
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a note
        </Button>
      </div>
  );
};

export default DocumentPage;
