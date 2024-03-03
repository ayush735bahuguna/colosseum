import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Contact, HandCoins, Home, Mail, Menu, Notebook, Sparkles, Star } from "lucide-react"

export function SheetComponent() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size='icon' className='rounded-full'> <Menu /> </Button>
            </SheetTrigger>
            <SheetContent className='bg-black outline-black border-black text-slate-200'>
                <navbar className=" flex items-start justify-center gap-6 flex-col pt-6 ">
                    <SheetHeader className={'text-2xl text-white'}>
                        COLOSSEUM&apos;24
                    </SheetHeader>
                    <div className="flex flex-row gap-4"> <Home /> HOME</div>
                    <div className="flex flex-row gap-4"><Sparkles /> EVENTS</div>
                    <div className="flex flex-row gap-4"> <HandCoins /> SPONSORS</div>
                    <div className="flex flex-row gap-4"> <Mail /> CONTACT US</div>
                </navbar>
            </SheetContent>
        </Sheet>
    )
}
