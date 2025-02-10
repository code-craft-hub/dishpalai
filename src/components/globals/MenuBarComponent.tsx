"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";
import { cardNavLinks } from "@/constants";
import {Link} from "react-router-dom";
const MenuBarComponent = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IoIosMenu className="size-10 text-vividOrange" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 w-[200px] font-syne ml-8">
          {cardNavLinks?.map(({ title, href, img }, index) => (
            <DropdownMenuItem key={index} className="hover:!bg-slate-100">
              <Link to={href} className="gap-5 flex items-center w-full">
                <img src={img} alt="" />
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuBarComponent;
