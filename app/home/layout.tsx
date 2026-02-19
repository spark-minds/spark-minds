import Navbar from "@/components/navbar/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-home-gradient">
      <Navbar />
      {children}
    </div>
  );
}

