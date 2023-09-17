import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date,image } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
      <Link href={`/posts/${id}`}>
        <Image
          src={image}
          alt=""
          //priority={index === 0}
          width="320"
          height="180"
          className="rounded-t"
        />
        <h2 className="font-orbitron font-semibold py-1 text-center">
          {title}
        </h2>
      </Link>
    </li>
  );
}
