"use client";

import { Id } from "@/convex/_generated/dataModel";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
}

export const DocumentList = () => {
  return (
    <div>
      Document List
    </div>
  )
}
