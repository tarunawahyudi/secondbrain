"use client";

import "@blocknote/core/fonts/inter.css";
import {
  PartialBlock
} from "@blocknote/core";

import {
  BlockNoteView
} from "@blocknote/mantine";

import {
  useCreateBlockNote
} from "@blocknote/react";

import "@blocknote/mantine/style.css";
import {useTheme} from "next-themes";
import {useEffect} from "react";
import {useEdgeStore} from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({onChange, initialContent, editable}: EditorProps) => {

  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleChange = () => {
    const currentContent = JSON.stringify(editor.document);
    onChange(currentContent);
  }

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  }

  const handleDelete = async (url: string)  => {
    await edgestore.publicFiles.delete({ url });
  }

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? JSON.parse(initialContent) as PartialBlock[]
      : undefined,
    uploadFile: handleUpload
  });

  useEffect(() => {
    handleChange();
  }, [editor.document]);

  return (
    <div>
      <BlockNoteView

        onChange={handleChange}
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor;
