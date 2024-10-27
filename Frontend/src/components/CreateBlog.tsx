import { useState } from "react";
import Lablebox from "./Lablebox";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
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
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [content ,setContent]=useState("");
    const [state, setState] = useState<blogCreationType>({
        title: "",
        imageLink: "",
        published: false
    })

    async function handleButton() {
        setIsLoading(true)
        try {
            const clean=DOMPurify.sanitize(content);
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, { ...state,content:clean }, {
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
    return <div className=" flex justify-center items-center bg-slate-950 text-white ">
        <div className="w-1/2 bg-slate-800 h-full flex flex-col p-8">

            <h1 className="flex justify-center text-5xl font-bold  mb-2  text-gray-900 dark:text-white p-3">Create a Blog</h1>

            <Lablebox name={"Enter the Title"} placeholdertext="A new Beggining..." onChange={(e) => {
                setState({
                    ...state,
                    title: e.target.value
                });
            }} >
            </Lablebox>


            <div className=" py-4 flex-col flex-1">
                <h2 className=" text-lg  font-semibold">Add your thougths here</h2>
                <Tiptap setContent={setContent} content={content}></Tiptap>
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