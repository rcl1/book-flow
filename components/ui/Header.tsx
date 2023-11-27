import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Sheet2,
  SheetContent2,
  SheetTrigger2,
} from "@/components/ui/sheet2";

import TextUnderline from "./TextUnderline";


const genres: string[] = ["Novel", "Fiction", "Non-fiction", "Romance", "Mystery", "Horror", "Humor", "Adventure", "Poetry", "History", "Science"];

export default function Header() {

  return (
    <header className="bg-white h-20 flex gap-2 border-b border-neutral-200">
      <div className="basis-2/12 text-2xl font-bold flex text-neutral-700 min-w-fit">
        <Link href="" className="lg:hidden my-auto mx-8 hover:text-neutral-900">BF</Link>
        <Link href="" className="hidden lg:block my-auto mx-8">Book Flow</Link>
      </div>
      <div className="flex-1 flex">
        <div className="w-full my-auto flex border border-neutral-300 rounded-full max-w-3xl mx-auto">
          <input type="text" placeholder="Search for books.." className="h-12 w-full px-5 rounded-l-full border-r border-neutral-200 outline-gray-300"/>
          <button className="w-20 lg:w-28 rounded-r-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="m-auto">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="basis-2/12 flex">
        <div className="ml-auto flex">
          <div className="my-auto mr-4 lg:mr-8">
            <Sheet>
              <SheetTrigger>
                <div className="hover:border aspect-square active:bg-neutral-300 p-2 rounded-md">
                  <svg fill="none" color="black" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                    <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </div>
              </SheetTrigger>
              <SheetContent className="w-48 lg:w-80 bg-white">
                <div className="h-full flex text-xl lg:text-2xl font-light">
                  <div className="w-full my-auto flex flex-col gap-24 text-center">
                    <div className="mx-auto">
                      <Sheet2>
                        <SheetTrigger2>
                          <TextUnderline content="Genres" />
                        </SheetTrigger2>
                        <SheetContent2 className="w-48 lg:w-80 bg-white">
                          <div className="h-full flex text-xl lg:text-2xl font-light">
                            <div className="h-full w-full flex flex-col gap-24 text-center overflow-y-auto scrollbar py-48">
                              {genres.map((genre) => (
                                <div className="mx-auto" key={genre}>
                                  <Link href="#"><TextUnderline content={genre}/></Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </SheetContent2>
                      </Sheet2>
                    </div>
                    <div className="mx-auto">
                      <Link href="#"><TextUnderline content="Profile"/></Link>
                    </div>
                    <div className="mx-auto">
                      <Link href="#"><TextUnderline content="Logout"/></Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
