import { ReactNode } from "react";
import WidthWrapper from "./width-wrapper";
import { NavAction } from "./navbar";

export function ArticleWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="absolute inset-0 bg-white pb-20">
      <WidthWrapper className=" h-auto">
        <nav className="py-12 flex justify-between">
          <NavAction text="back" href="articles" type="route" />
          <NavAction text="x/@vinayisactive" href="https://x.com/vinayisactive" type="link" icon />
        </nav> 

        {children}
      </WidthWrapper>
    </main>
  );
}

export function ArticleHeader({ heading, date, className}: {heading: string; date: string; className?: string;}) {
  return (
    < div className={`flex justify-between items-end gap-5 ${className}`}>
      <h1 className=" text-3xl md:text-5xl text-black">{heading}</h1>
      <div className="text-sm text-gray-500 whitespace-nowrap">{date}</div>
    </div>
  );
}; 

export function ArticleDescription({children, className}: {children: ReactNode; className?: string}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}; 

export function ArticleSectionWithHeading({children, className, heading, id}: {children: ReactNode; className?: string; heading: string; id?:string}){
  return(
    <div className={className} id={id}>
     <h1 className="text-xl md:text-3xl">{heading}</h1>
      {children}    
    </div>
  )
}