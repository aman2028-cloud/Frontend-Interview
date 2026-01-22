import { Button } from "@/components/ui/button"
export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">CA MONK</div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <span className="cursor-pointer hover:text-primary">Tools</span>
          <span className="cursor-pointer hover:text-primary">Practice</span>
          <span className="cursor-pointer hover:text-primary">Events</span>
          <span className="cursor-pointer hover:text-primary">Job Board</span>
          <span className="cursor-pointer hover:text-primary">Points</span>
        </nav>

        <Button variant="outline">Profile</Button>
      </div>
    </header>
  )
}
