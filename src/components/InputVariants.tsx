import { Input, InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DropDownMenu } from "./DropdownMenu";
import { CountryCode, countryCodes } from "@/utils/countryCodes";

interface Props {
  label: string;
  placeholder: string;
  inputType?: string;
  id?: string;
}

interface PasswordProps extends InputProps {
  label: string;
  disabled: boolean;
}

export function InputWithLabel({ label, inputType, placeholder, id }: Props) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label className="text-neutral-600" htmlFor={id}>
        {label}
      </Label>
      <Input type={inputType} id={id} placeholder={placeholder} />
    </div>
  );
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordProps>(
  ({ className, label, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const disabled = props.disabled || false;

    return (
      <div className="grid w-full items-center gap-1.5">
        <Label className="text-neutral-600" htmlFor={props.id}>
          {label}
        </Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            className={cn("hide-password-toggle pr-10", className)}
            ref={ref}
            {...props}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => {
              console.log("PasswordInput button clicked");
              setShowPassword((prev) => !prev);
            }}
            disabled={disabled}
          >
            {showPassword && !disabled ? (
              <EyeIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>

          <style>{`
              .hide-password-toggle::-ms-reveal,
              .hide-password-toggle::-ms-clear {
                visibility: hidden;
                pointer-events: none;
                display: none;
              }
            `}</style>
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export const PhoneNumberInput = forwardRef<HTMLInputElement, Props>(
  ({ label, inputType, placeholder, id }, ref) => {
    const [selectedItem, setSelectedItem] = useState<CountryCode>(
      countryCodes[0]
    );

    function onSelected(value: CountryCode) {
      setSelectedItem(value);
    }
    return (
      <div className="grid w-full items-center gap-1.5">
        {/* {selectedItem && (
          <span className="text-neutral-500">{selectedItem.name}</span>
        )} */}
        <Label className="text-neutral-600" htmlFor={id}>
          {label}
        </Label>
        <div className="relative flex ">
          <DropDownMenu
            items={countryCodes.map((country) => {
              return {
                name: country.name,
                value: country.code,
                icon: country.flag,
                code: country.dial_code,
              };
            })}
            onSelected={onSelected}
            className="w-20 border-r-transparent rounded-tr-none rounded-br-none"
          />
          <Input
            type={inputType}
            id={id}
            placeholder={placeholder}
            ref={ref}
            className="pr-10 border-l-transparent rounded-tl-none rounded-bl-none"
          />
        </div>
      </div>
    );
  }
);
PhoneNumberInput.displayName = "PhoneNumberInput";
