import { cn } from "@/lib/utils";

type DecorativeBackdropProps = {
  variant?: "light" | "dark";
};

/** Faint dot grid plus a slow-drifting red glow. Purely decorative. */
export function DecorativeBackdrop({ variant = "light" }: DecorativeBackdropProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent_75%)]",
          variant === "dark"
            ? "text-white opacity-[0.07]"
            : "text-foreground opacity-[0.3]"
        )}
      />
      <div
        className={cn(
          "decorative-blob absolute left-1/2 top-0 h-[32rem] w-[32rem] rounded-full blur-[100px]",
          variant === "dark" ? "bg-primary/25" : "bg-primary/[0.09]"
        )}
      />
    </div>
  );
}
