import React from 'react'
import { cn } from '../../lib/utils';

const Container = ({children,className}:
    {children:React.ReactNode;
    className?:string;
}) => {
  return (
    <div className={cn("max-w max-h max-auto")}>{children}</div>
  )
}

export default Container