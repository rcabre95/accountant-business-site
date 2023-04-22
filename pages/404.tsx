import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-fit w-fit flex">
                <h4 className="text-black border-r-2 border-navy text-lg h-12 px-4 flex items-center">404</h4>
                <p className="text-black px-4 flex items-center">Page not found</p>
            </div>
        </div>
    )
}