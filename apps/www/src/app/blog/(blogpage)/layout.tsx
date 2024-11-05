export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="px-6 pt-6">
            <div className="max-w-3xl mx-auto">
            {children}
            </div>
        </div>
    )
}