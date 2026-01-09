"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useEffect, useState } from "react";
import elvxk from "./elvxk";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const [host, setHost] = useState("");
  const [ip, setIp] = useState("");
  const [resLink, setResLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResLink(`${url}/${ip}/${host}`);
    setLoading(false);
  };

  useEffect(() => {
    console.info(elvxk);
  }, []);

  return (
    <div className="container mx-auto  px-6 py-8">
      <div className="flex gap-6 flex-col items-center justify-center min-h-[70vh]">
        <div className="flex flex-col items-center">
          <Image
            src="/resolve.webp"
            alt="ELVXK TOOL RESOLVER"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl font-bold">Manual Resolver</h1>
          <h1 className="">Skip DNS to preview to an IP</h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="host">Host</Label>
              <Input
                type="text"
                placeholder="pradipta.dev"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="ip">IP</Label>
              <Input
                type="text"
                placeholder="1.1.1.1"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                required
              />
            </div>
          </div>
          <Button type="submit">{loading ? "Loading..." : "Preview"}</Button>
        </form>

        {resLink && (
          <div className="w-full max-w-[100vw] h-[80vh] shadow-lg border-4 rounded-xl overflow-hidden">
            {resLink && (
              <iframe
                src={resLink}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
