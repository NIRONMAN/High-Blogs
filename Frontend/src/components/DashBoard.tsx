import Appbar from "./Appbar";
import BlogWrapper from "./BlogWrapper";

export default function DashBoard(){
    return <div className="bg-slate-900">
        <Appbar></Appbar>
        <BlogWrapper></BlogWrapper>
    </div>
}