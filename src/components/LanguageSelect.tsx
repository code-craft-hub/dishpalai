import * as React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function LanguageSelect() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState("en");
  const changeLang = (value: any) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" border-accent border-[1px] uppercase !w-24"
        >
          {lang}
          {lang == "en" ? (
            <img src="/assets/uk.png" alt="" />
          ) : (
            <img src="/assets/deusche.png" alt="" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!w-8 !min-w-24 shadow-2xl z-50">
        <DropdownMenuRadioGroup value={lang} onValueChange={changeLang}>
          <DropdownMenuRadioItem
            value="en"
            className={`${lang == "en" ? "hidden" : "flex"} !p-2 !pl-4 space-x-2`}
          >
            EN <img src="/assets/uk.png" alt="" />{" "}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="de"
            className={`${lang == "de" ? "hidden" : "flex"} !p-2 !pl-4 space-x-2`}
          >
            DE <img src="/assets/deusche.png" alt="" />{" "}
          </DropdownMenuRadioItem>{" "}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
