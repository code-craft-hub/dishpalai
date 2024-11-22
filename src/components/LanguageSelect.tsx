import * as React from "react";
import { IoLanguage } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// const lngs = {
//   en: { nativeName: "English" },
//   de: { nativeName: "Deutsch" },
// };
export function LanguageSelect() {
  // const { t, i18n } = useTranslation();
  const [position, setPosition] = React.useState("en");
  // const changeLang = () => {

  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IoLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24 bg-[#535252]">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="de">DE</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
