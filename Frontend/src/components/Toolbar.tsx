import { Editor } from "@tiptap/react"
import { Bold, Code, Heading1, Heading2, Heading3, Italic, List, ListOrdered } from "lucide-react"
type Prop={
    editor:Editor|null
}
function Toolbar({editor}:Prop) {
    
    return (
        <div className="  border-2 p-2 rounded-md flex flex-row gap-2 bg-slate-600">
            <button onClick={()=>{
                editor?.chain().focus().toggleHeading({level:1}).run();
            }} className=" bg-white rounded-sm p-0.5">
            <Heading1 color="black" />
            </button>

            <button onClick={()=>{
                editor?.chain().focus().toggleHeading({level:2}).run();
            }} className=" bg-white rounded-sm p-0.5">
            <Heading2 color="black" />
            </button>

            <button onClick={()=>{
                editor?.chain().focus().toggleHeading({level:3}).run();
            }} className=" bg-white rounded-sm p-0.5">
            <Heading3 color="black" />
            </button>

            <button onClick={()=>{
                editor?.chain().focus().toggleBold().run();
            }} className=" bg-white rounded-sm p-0.5">
            <Bold color="black" />
            </button>
            <button className=" bg-white rounded-sm p-0.5">
            <Italic  onClick={()=>{
                editor?.chain().focus().toggleItalic().run();
            }} color="black" />
            </button>
            <button className=" bg-white rounded-sm p-0.5">
            <ListOrdered  onClick={()=>{
                editor?.chain().focus().toggleOrderedList().run();
            }} color="black" />
            </button>
            <button className=" bg-white rounded-sm p-0.5">
            <List  onClick={()=>{
                editor?.chain().focus().toggleBulletList().run();
            }} color="black" />
            </button>
            <button className=" bg-white rounded-sm p-0.5">
            <Code  onClick={()=>{
                editor?.chain().focus().toggleCodeBlock().run();
            }} color="black" />
            </button>
            

            
        </div>
    )
}

export default Toolbar