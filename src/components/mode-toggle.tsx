import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full !p-0">
          <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="shadow-2xl backdrop-blur-3xl rounded-xl p-2.5">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:cursor-pointer hover:scale-105 duration-500 transition-all">Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:cursor-pointer hover:scale-105 duration-500 transition-all">Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:cursor-pointer hover:scale-105 duration-500 transition-all">System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
