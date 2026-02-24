"use client"

import React from "react"

interface WordRotateProps {
  
   words: string[]
   
   isHovered?: boolean
 
   height?: number
  
   duration?: number
  
   className?: string
 
   style?: React.CSSProperties
}



export function WordRotate({
   words,
   isHovered = false,
   height = 55, 
   duration = 0.5,
   className = "",
   style = {},
}: WordRotateProps) {
   return (
      <div
         className="relative overflow-hidden"
         style={{ height: `${height}px` }}
      >
         <div
            className="flex flex-col"
            style={{
               transition: `transform ${duration}s cubic-bezier(0.76, 0, 0.24, 1)`,
              
               transform: isHovered ? `translateY(-${height}px)` : "translateY(0)",
            }}
         >
          
            <div
               style={{ height: `${height}px` }}
               className="flex items-center justify-center shrink-0"
            >
               <span className={className} style={style}>
                  {words[0]}
               </span>
            </div>

           
            <div
               style={{ height: `${height}px` }}
               className="flex items-center justify-center shrink-0"
            >
               <span className={className} style={style}>
                  {words[1]}
               </span>
            </div>
         </div>
      </div>
   )
}

export default WordRotate
