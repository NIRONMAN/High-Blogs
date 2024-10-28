import { useState } from "react";
import Lablebox from "./Lablebox";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { json, useNavigate } from "react-router-dom";
import Tiptap from "./TipTapEditor";
import MordernButton from "./MordernButton";
import DOMPurify from 'dompurify';


interface blogCreationType {
    title: string,
    content?: string,
    imageLink: string,
    published?: boolean
}

export default function CreateBlog() {
    const [aiContent, setAiContent] = useState("...Magic will appear");
    const [isLoading, setIsLoading] = useState(false);
    const [loadingAI, setLodingAi] = useState(false);

    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [state, setState] = useState<blogCreationType>({
        title: "",
        imageLink: "",
        published: false
    })

    async function handleButton() {
        setIsLoading(true)
        try {
            const clean = DOMPurify.sanitize(content);
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, { ...state, content: clean }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const blogId = res.data.id;
            navigate(`/view/${blogId}`)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)

    }
    async function handleGenerate() {
        setLodingAi(true);
        const prompt = `
You are an AI assistant specialized in blog writing, working for High Blogs—a platform supporting writers. 
Your task is to analyze the provided context, title, and image link: ${content} ${state.title} ${state.imageLink}. 

Based on this information, generate the top 5 ideas that can help the writer, formatted as HTML elements for display on a website. 
If no context is provided, instruct the user to begin writing on the platform on the right side before you can provide ideas.
`;

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog/ai`, {
                prompt
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            const clean = await DOMPurify.sanitize(res.data.text);
            //console.log(typeof(clean))
            setAiContent(clean);
        } catch (error) {
            console.log(error)
        }
        setLodingAi(false)
    }
    return <div className=" flex justify-center items-center bg-slate-950 text-white h-[calc(100vh-60px)]">
        <div className=" h-full w-1/3 bg-black p-4 flex flex-col gap-2">
            <h1 className=" text-center font-mono font-bold  text-3xl">AI Helper</h1>
            <p >I will help you write. I can help with writer's Block. But the writing is what you have to do yourself. Actually please try to avoid me😁.</p>
            <div dangerouslySetInnerHTML={{ __html: aiContent }} className="flex flex-1 flex-col text-gray-300 p-2 bg-slate-800 rounded-lg overflow-auto">
                {/* {aiContent} */}
            </div>
            <MordernButton onClick={handleGenerate} isLoading={loadingAI} title="Generate Ideas ✨"></MordernButton>
        </div>
        <div className="w-2/3 bg-slate-800 h-full flex flex-col px-8 py-3  overflow-auto">

            <h1 className="flex justify-center text-5xl font-bold   text-gray-900 dark:text-white pb-3">Create a Blog</h1>

            <Lablebox name={"Enter the Title"} placeholdertext="A new Beggining..." onChange={(e) => {
                setState({
                    ...state,
                    title: e.target.value
                });
            }} >
            </Lablebox>


            <div className=" py-4 flex-col flex-1 ">
                <h2 className=" text-lg  font-semibold">Add your thougths here</h2>
                <div className=" ">

                    <Tiptap setContent={setContent} content={content}></Tiptap>
                </div>
            </div>
            <Lablebox name={"Place your thumbnail Link"} placeholdertext="example.com" onChange={(e) => {
                setState({
                    ...state,
                    imageLink: e.target.value
                })
            }} ></Lablebox>

            <div className="flex justify-end">

                <MordernButton isLoading={isLoading} onClick={handleButton} title="Publish!"></MordernButton>
            </div>
        </div>

    </div>
}