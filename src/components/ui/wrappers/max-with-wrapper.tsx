import { ReactNode, FC } from "react"

interface MaxWithWrapperProps {
    children : ReactNode, 
    className?: string
}

const MaxWithWrapper: FC<MaxWithWrapperProps> = ({children, className=""}) => {
  return (
    <div className={`w-screen max-w-screen-lg mx-auto px-4 lg:px-0 ${className}`} >
      {children}
    </div>
  )
}

export default MaxWithWrapper
