import { Nav, NavLink } from "@/components/ui/Nav"


export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/posts">Posts</NavLink>
                <NavLink href="/admin/users">Users</NavLink>
                <NavLink href="/admin/orders">Orders</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}