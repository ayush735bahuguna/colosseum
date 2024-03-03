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
import { Menu } from "lucide-react"

export function SheetComponent() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size='icon' className='rounded-full'> <Menu /> </Button>
            </SheetTrigger>
            <SheetContent className='bg-black outline-black border-black text-white'>
                <navbar className=" flex items-center justify-center gap-6 flex-col">
                    <SheetHeader className={'text-3xl'}>
                        COLOSSEUM'24
                    </SheetHeader>
                    <p>HOME</p>
                    <p>EVENTS</p>
                    <p>SPONSORS</p>
                    <p>CONTACT US</p>
                </navbar>
            </SheetContent>
        </Sheet>
    )
}
