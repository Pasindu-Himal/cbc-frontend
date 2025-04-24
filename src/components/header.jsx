import UserData from "./userData";

export default function Header(){
    console.log("Header component loading...")
    return(
        <div className=" bg-[#FFF70]" >
            <h1 className="font-bold text-[100px] text-blue-400 ">Crystal Beauty Clear</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, nisi?</p>
            <UserData></UserData>
        </div>
    )
}