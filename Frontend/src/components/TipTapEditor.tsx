// src/Tiptap.tsx
import { useEditor, EditorContent,} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
// define your extension array


const Tiptap = ({setContent,content}:any) => {
  const editor = useEditor({
    extensions:[StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      })],
    content,
    editorProps:{
        attributes:{
            class:"min-h-[200px] rounded-md p-2 border-2"
        }
    },
    onUpdate({editor}){
        setContent(editor.getHTML())
        console.log(editor.getHTML())
    }

  })

  return (
    <div className='flex flex-col gap-y-4 h-full w-full '>
        <Toolbar editor={editor}></Toolbar>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </div>
  )
}

export default Tiptap
