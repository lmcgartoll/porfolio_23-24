import Link from "next/link";

export default function Projects() {
  return (
    <main className="h-screen flex items-center justify-center py-10 px-12 fixed top-0 left-0 right-0 bottom-0">
      <div className="h-full w-screen border-[2px] border-solid rounded-xl border-dark-grey overflow-hidden">
        <div className="font-mondwest text-[48px] leading-none px-[30px] py-[50px] relative h-full">
          Gallery
          <br />
          <div className="font-bit text-2xl leading-none">+++</div>
          <ul className="font-bit text-2xl list-square pl-[13px] pt-6">
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
        </div>
      </div>
    </main>
  );
}
