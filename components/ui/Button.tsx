import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "ghost" | "default"
    size?: "sm" | "lg" | "default"
    isLoading?: boolean
}


function Button  ({variant, size, children, isLoading = true, ...props} : ButtonProps)  {
    let value : {
        variant: string
        size: string
    } = {
        variant: "",
        size: ""
    }
    function setVariant(variant:ButtonProps["variant"], size: ButtonProps["size"])  {
        switch(variant) {
            case "ghost":
                value.variant = "bg-transparent hover:text-slate-900 hover:bg-slate-200" 
                break
            case "default":
            default:
                value.variant = "bg-slate-900 text-white hover:bg-slate-800 outlined border-solid border-sky-500 border-2"
                break
        }

        switch(size) {
            case "sm":
                value.size = "h-9 px-2"
                break
            case "lg":
                value.size = "h-11 px-8"
                break
            case "default":
            default:
                value.size = "h-10 px-4 py-2"
                break
        }

        return value.variant + " " + value.size
    }
    
 return ( <button className={cn(" cursor-pointer active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",setVariant(variant, size)) }> {isLoading ? <Loader2 className="mr-2 animate-spin h-4 w-4" /> : null} {children}</button>)
   
 
}

export default Button