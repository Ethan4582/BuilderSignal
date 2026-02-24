"use client"

import React from "react"

interface WordRotateProps {
   /** Array of words to rotate between (we only use [0] and [1]) */
   words: string[]
   /** Controlled hover state — toggles between words[0] and words[1] */
   isHovered?: boolean
   /** Height of the visible window slot in px to control strict overflow boundaries */
   height?: number
   /** Duration in seconds */
   duration?: number
   /** Additional classNames on the animated text */
   className?: string
   /** Inline styles on the animated text */
   style?: React.CSSProperties
}

/**
 * A highly reliable CSS-transform based vertical word rotation.
 * This sidesteps Framer Motion layout clipping issues by using strictly
 * sized container slots and a simple translateY(-100%).
 */
export function WordRotate({
   words,
   isHovered = false,
   height = 55, // Explicit pixel height is crucial for the CSS math
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
               // Shift up exactly one slot 'height'
               transform: isHovered ? `translateY(-${height}px)` : "translateY(0)",
            }}
         >
            {/* Base Slot (Visible when NOT hovered) */}
            <div
               style={{ height: `${height}px` }}
               className="flex items-center justify-center shrink-0"
            >
               <span className={className} style={style}>
                  {words[0]}
               </span>
            </div>

            {/* Hover Slot (Visible when IS hovered) */}
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
