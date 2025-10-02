"use client"

export default function Dashboard({ session }: { session: any   }) {



  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome {session?.user?.name}</h1>
    </div>
  );
}
