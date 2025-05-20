
import { FloatingNav } from "./floating-navbar"



export default function Navbar(){

    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
        {
            name: "Experience",
            link: "/experience",
        },
        {
            name: "Resume",
            link: "/resume"
        }
    ]

    return(
        <FloatingNav navItems={navItems}/>
    )
}