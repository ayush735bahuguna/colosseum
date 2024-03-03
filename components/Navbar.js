import React from 'react'
import { SheetComponent } from './Home/sheetComponent'

export default function Navbar() {
    return (
        <navbar className="backdrop-blur-sm w-full p-8 text-white flex items-center sm:justify-center max-sm:justify-start gap-6">
            <div className="sm:hidden">
                <SheetComponent />
            </div>
            <p className="max-sm:hidden hover:bg-slate-700 cursor-pointer py-2 px-4 rounded-lg">HOME</p>
            <p className="max-sm:hidden hover:bg-slate-700 cursor-pointer py-2 px-4 rounded-lg">EVENTS</p>
            <p className="max-sm:hidden hover:bg-slate-700 cursor-pointer py-2 px-4 rounded-lg">SPONSORS</p>
            <p className="max-sm:hidden hover:bg-slate-700 cursor-pointer py-2 px-4 rounded-lg">CONTACT US</p>
        </navbar>
    )
}
