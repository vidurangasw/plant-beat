import { Button } from "@nextui-org/react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12 bg-gradient-to-br from-green-100 via-blue-200 to-green-100 rounded-lg"
      // style={{
      //   backgroundImage: `url('/organic-farm-vegetables.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="absolute inset-0 bg-banner bg-center z-0"
        style={{
          backgroundImage: `url('/plantBeatLogo.jpg')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10 blur-lg"></div>
      </div>

      {/* <div className="relative bg-gradient-to-br from-green-100 via-blue-200 to-green-100 rounded-lg">
        <span className="bg-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-500 via-blue-300 text-6xl font-bold relative z-10">
          Welcome to Plantbeat
        </span>
        <span className="absolute inset-0 text-stroke-2 text-stroke-black bg-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-500 via-blue-300 text-6xl font-bold">
          Welcome to Plantbeat
        </span>
      </div> */}

      <div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href="/graphpreview">
            <Button color="success">GH 01</Button>
          </Link>
          <Link href="/graphpreview1">
            <Button color="success">GH 02</Button>
          </Link>
          <Link href="/graphpreview2">
            <Button color="success">GH 03</Button>
          </Link>
          <Link href="/summary">
            <Button color="success">Crop Summary</Button>
          </Link>
        </div>
        <div></div>
      </div>
    </main>
  );
}
