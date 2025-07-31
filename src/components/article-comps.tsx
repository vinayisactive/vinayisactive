"use client"
import { ReactNode, useState } from "react";
import WidthWrapper from "./width-wrapper";
import { NavAction } from "./navbar";
import {AnimatePresence, motion} from 'motion/react'
import { useRouter } from "next/navigation";

export function ArticleWrapper({ children }: { children: ReactNode }) {
  const [showArticle, setShowArticle] = useState(true); 
  const router = useRouter();

  const handleAnimationAndNavigation = () => {
      setShowArticle(false)

      setTimeout(() => {
      router.push("/articles"); 
    }, 700);
  }

  return (
    <main className="absolute inset-0 bg-white pb-20">
      <WidthWrapper className=" h-auto">
        <nav className="py-12 flex justify-between">
        
          <AnimatePresence>
          {showArticle && <motion.button
              initial={{ opacity: 0, translateX: -100, translateY: -100, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1, filter: "blur(0px)" }}
              exit={{
                filter: "blur(10px)",
                opacity: 0,
                translateY: -300,
                translateX: -100
              }}

              transition={{
                duration: 1.05,
                ease: "easeInOut"
              }}
            className="text-sm flex items-center gap-1 underline-offset-2 hover:underline text-gray-500 cursor-pointer" 
            onClick={handleAnimationAndNavigation}>
             back
          </motion.button>}
          </AnimatePresence>

         {showArticle && <NavAction text="x/@vinayisactive" href="https://x.com/vinayisactive" type="link" icon />}
        </nav> 
      
        <AnimatePresence>
          { showArticle && (
             <motion.div
              initial={{ opacity: 0, translateX: -200, translateY: -350, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1,  filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                translateY: -300,
                translateX: -100,
                filter: "blur(10px)"
              }}

              transition={{
                duration: 1.02,
                ease: "easeInOut"
              }}
             >
                {children}
            </motion.div>
          )
         } 
        </AnimatePresence>
       
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