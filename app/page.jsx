import { Suspense } from "react";
import UserTable from "@/components/UserTable/UserTable";

export default async function UsersPage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-5">User Management</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable page={page} />
      </Suspense>
    </div>
  );
}
