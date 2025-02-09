import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"

const Providers = ({children}:{children:ReactNode})=>{
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
    )
}

export default Providers