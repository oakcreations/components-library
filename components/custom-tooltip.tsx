"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>
>(({ ...props }, ref) => <TooltipPrimitive.Root delayDuration={0} disableHoverableContent={true} {...props} />)
Tooltip.displayName = "Tooltip"

const TooltipTrigger = TooltipPrimitive.Trigger

interface CustomTooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  direction?: "top" | "bottom" | "left" | "right"
  titleTop?: string
  titleMid?: string
  titleFooter?: string
  midColor?: string
}

const CustomTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  CustomTooltipContentProps
>(
  (
    {
      className,
      sideOffset = 4,
      direction = "bottom",
      titleTop,
      titleMid,
      titleFooter,
      midColor = "#22c55e", // green-500 default
      ...props
    },
    ref,
  ) => {
    const getArrowStyles = () => {
      const baseArrow = "absolute w-0 h-0 border-solid"
      const arrowSize = "border-8"

      switch (direction) {
        case "top":
          return {
            arrow: `${baseArrow} ${arrowSize} border-t-white border-x-transparent border-b-transparent top-full left-1/2 transform -translate-x-1/2`,
            shadow: `${baseArrow} ${arrowSize} border-t-gray-100 border-x-transparent border-b-transparent top-full left-1/2 transform -translate-x-1/2 translate-y-px`,
          }
        case "bottom":
          return {
            arrow: `${baseArrow} ${arrowSize} border-b-white border-x-transparent border-t-transparent bottom-full left-1/2 transform -translate-x-1/2`,
            shadow: `${baseArrow} ${arrowSize} border-b-gray-100 border-x-transparent border-t-transparent bottom-full left-1/2 transform -translate-x-1/2 -translate-y-px`,
          }
        case "left":
          return {
            arrow: `${baseArrow} ${arrowSize} border-l-white border-y-transparent border-r-transparent left-full top-1/2 transform -translate-y-1/2`,
            shadow: `${baseArrow} ${arrowSize} border-l-gray-100 border-y-transparent border-r-transparent left-full top-1/2 transform -translate-y-1/2 translate-x-px`,
          }
        case "right":
          return {
            arrow: `${baseArrow} ${arrowSize} border-r-white border-y-transparent border-l-transparent right-full top-1/2 transform -translate-y-1/2`,
            shadow: `${baseArrow} ${arrowSize} border-r-gray-100 border-y-transparent border-l-transparent right-full top-1/2 transform -translate-y-1/2 -translate-x-px`,
          }
        default:
          return {
            arrow: `${baseArrow} ${arrowSize} border-b-white border-x-transparent border-t-transparent bottom-full left-1/2 transform -translate-x-1/2`,
            shadow: `${baseArrow} ${arrowSize} border-b-gray-100 border-x-transparent border-t-transparent bottom-full left-1/2 transform -translate-x-1/2 -translate-y-px`,
          }
      }
    }

    const arrowStyles = getArrowStyles()

    return (
      <TooltipPrimitive.Content
        ref={ref}
        side={direction}
        sideOffset={sideOffset}
        className={cn(
          "relative z-50 overflow-visible rounded-2xl bg-white px-4 py-3 text-sm shadow-lg border border-gray-100",
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-start text-left min-w-[120px]">
          {titleTop && <div className="text-xs text-gray-500 font-medium mb-1">{titleTop}</div>}
          {titleMid && (
            <div className="text-2xl font-bold mb-1" style={{ color: midColor }}>
              {titleMid}
            </div>
          )}
          {titleFooter && <div className="text-xs text-gray-500">{titleFooter}</div>}
        </div>
        <div className={arrowStyles.shadow}></div>
        <div className={arrowStyles.arrow}></div>
      </TooltipPrimitive.Content>
    )
  },
)
CustomTooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, CustomTooltipContent, TooltipProvider }
