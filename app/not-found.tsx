"use client";
import { Button } from "@/UI/Button/Button";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main>
        <h3>404...Страница не найдена</h3>
        <div onClick={() => router.push("/")}>
          <Button>На главную</Button>
        </div>
    </main>
  );
}