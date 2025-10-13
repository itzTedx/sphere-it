import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-[50] border-b bg-[radial-gradient(transparent_1px,_#fafafa_1px)] bg-[size:4px_4px] bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <Link href="/">Logo</Link>
      </div>
    </header>
  );
};
