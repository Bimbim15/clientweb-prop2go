import { Navbar } from "@/components/navbar"

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-bold">Daftar / Masuk Page</h1>
      </div>
    </main>
  )
}
