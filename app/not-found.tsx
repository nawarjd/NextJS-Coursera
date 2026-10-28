'use client';

import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        src="/images/logo.svg"
        loading="eager"
        alt={`${APP_NAME} logo`}
        priority={true}
        width={48}
        height={48}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-lg mt-2">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          render={<Link href="/" />}
          nativeButton={false}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
