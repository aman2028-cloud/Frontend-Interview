type BlogDetailHeaderProps = {
  title: string
}

export default function BlogDetailHeader({ title }: BlogDetailHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="text-3xl font-bold leading-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
      </div>

      <div className="border-b pt-4" />
    </header>
  )
}
