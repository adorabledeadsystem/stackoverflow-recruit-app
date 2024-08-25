"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/UI/Button/Button";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="main">
        <h3>404...Страница не найдена</h3>
        <div onClick={() => router.push("/")}>
          <Button variant="notFound">На главную</Button>
        </div>
    </main>
  );
}