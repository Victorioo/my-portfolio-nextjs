import Link from 'next/link'

export const ChangeLanguage = ({ lang }: { lang: string }) => {
  if (lang === "es") {
    return (
      <>
        <Link href="/">see on English -{">"}</Link>
      </>
    );
  }

  if (lang === "en") {
    return (
      <>
        <Link href="/es">ver en Español -{">"}</Link>
      </>
    );
  }
};
