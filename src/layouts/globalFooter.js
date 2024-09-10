import Link from "next/link";
import Image from "next/image";
import github from "../public/images/github.svg";
import linkedIn from "../public/images/linkedIn.svg";

export default function Footer() {
  return (
    <footer className="flex flex-row border-t border-slate-700 justify-between">
      <p className="py-4 px-8">ⓒ 2024. Peponi All rights reserved</p>
      <section className="flex flex-row gap-4 py-4 px-8">
        <Link href="https://github.com" className="size-6" target="_blank">
          <Image src={github} alt="github"></Image>
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="size-6"
          target="_blank"
        >
          <Image src={linkedIn} alt="linkedin"></Image>
        </Link>
      </section>
    </footer>
  );
}
