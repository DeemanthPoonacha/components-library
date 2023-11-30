import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/cargo-monitor"}>Cargo Monitor</Link>
        </li>
        <li>
          <Link href={"/misc"}>Miscellaneous</Link>
        </li>
      </ul>
    </div>
  );
}
