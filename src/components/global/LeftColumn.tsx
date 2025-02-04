import Image from "next/image";
import SocialContacts from "@components/global/SocialContacts";
import SideNav from "@components/global/SideNav";

export default function LeftColumn() {
  return (
    <aside className="w-[275px] flex flex-col items-center text-neutral p-2 shadow-lg">

      {/* Profile Section */}
      <section className="w-full text-center pl-[12px]">
        <figure className="w-[250px] h-[250px] overflow-hidden border-2 border-primary shadow-md">
          <Image
            src="/img/hoodie_pfp_cropped.png" // Correct way to reference images from `public/`
            alt="Profile picture of Kris Reeck"
            width={250}
            height={250}
            priority
          />
        </figure>
        <figcaption className="mt-4">
          <h2 className="text-4xl text-primary font-bold">Kris Reeck</h2>
          <p className="text-md text-gray-400">Software &amp; Cloud Architect</p>
        </figcaption>
      </section>

      {/* Contact Section */}
      <SocialContacts />

      {/* Navigation */}
      <SideNav />

    </aside>
  );
}
