import { HeaderLink } from "./links-with-active";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <header className="border-b bg-card pt-16 sm:pt-20 md:pt-28">
      <h1 className="pb-16 text-center text-primary-900 text-title-1 sm:pb-20">{title}</h1>
      <ul className="mx-auto flex items-center justify-center gap-1">
        <li>
          <HeaderLink href="/legal/privacy">Privacy Policy</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/legal/terms-of-services">Terms of Service</HeaderLink>
        </li>
      </ul>
    </header>
  );
};
