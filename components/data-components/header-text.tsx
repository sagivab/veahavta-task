export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="max-w-xs md:max-w-[620px] font-bold text-4xl md:text-7xl text-center">
      {children}
    </h1>
  )
}
