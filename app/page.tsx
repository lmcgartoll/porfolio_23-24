import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center py-10 px-12 fixed top-0 left-0 right-0 bottom-0">
      <div className="h-full w-screen border-[2px] border-solid rounded-xl border-dark-grey overflow-hidden">
        <div className="font-mondwest text-[48px] leading-none px-[30px] py-[50px] relative h-full">
          Liam Mc Gartoll
          <br />
          <div className="font-bit text-[16px] sm:text-2xl leading-none">
            Designer + Developer
          </div>
          <ul className="font-bit text-[16px] sm:text-2xl list-square pl-[13px] pt-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/aboutMe">About Me</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
          <div className="font-bit absolute bottom-[50px] right-[30px] max-w-[640px] ml-28 sm:text-[32px] text-[20px] text-right">
            Hi! I’m Liam, a UX Design and Computer Science student at the
            University of Michigan who is passionate about web development and
            creating beautiful things that are accessible to all.
          </div>
        </div>
      </div>
    </main>
  );
}
