import Link from "next/link";

const navLinks = [
  { href: "/tedori-keisan-houhou/", label: "手取りの計算方法" },
  { href: "/nennshu-500-tedori/", label: "年収500万の手取り" },
  { href: "/shakai-hoken-ryou/", label: "社会保険料" },
  { href: "/furusato-nozei-jougen/", label: "ふるさと納税上限" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-lg font-extrabold text-primary-700 whitespace-nowrap"
        >
          手取り計算ナビ
        </Link>
        <nav aria-label="メインナビゲーション" className="hidden sm:block">
          <ul className="flex items-center gap-4 text-sm font-medium text-gray-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
