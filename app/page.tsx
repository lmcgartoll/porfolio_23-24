import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center py-10 px-12 fixed top-0 left-0 right-0 bottom-0">
      <div className="h-full w-screen border-[2px] border-solid rounded-xl border-dark-grey overflow-hidden">
        <div className="font-mondwest text-[48px] leading-none px-[30px] py-[50px] relative h-full">
          Liam Mc Gartoll
          <br />
          <div className="font-bit text-2xl leading-none">
            Designer + Developer
          </div>
          <li>
            <ul>Home</ul>
            <ul>Projects</ul>
          </li>
          <div className="font-bit absolute bottom-[50px] right-[30px] w-[640px] text-[32px] text-right">
            Hi! I’m Liam, a UX Design and Computer Science student at the
            University of Michigan who is passionate about web development and
            creating beautiful things that are accessible to all.
          </div>
        </div>
      </div>
    </main>
  );
}
