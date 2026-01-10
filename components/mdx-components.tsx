// components/mdx-components.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

export const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b border-muted pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-4",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-cyber/90",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 not-first:mt-6 text-muted-foreground", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className={cn("font-medium text-cyber hover:underline underline-offset-4 decoration-cyber/30", className)}
      href={props.href as string}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-cyber bg-cyber/5 py-3 pl-6 pr-3 italic text-foreground rounded-r-lg",
        className
      )}
      {...props}
    />
  ),
  // Code block container styling
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="relative my-6 overflow-hidden rounded-lg border border-muted/40 bg-[#050505] shadow-2xl">
      {/* Fake Terminal Header */}
      <div className="flex items-center justify-between border-b border-muted/20 bg-muted/10 px-4 py-2">
        <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground opacity-50">bash</div>
      </div>
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-sm leading-relaxed",
          className
        )}
        {...props}
      />
    </div>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted/30 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-cyber/80",
        className
      )}
      {...props}
    />
  ),
};