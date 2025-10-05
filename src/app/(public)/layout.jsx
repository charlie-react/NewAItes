
import getUserFromSession from "@/lib/sessions";
import Navbar from "../components/Navbar";

export default async function PublicLayout({ children }) {
  const user = await getUserFromSession();

  return (
    <div>
      <Navbar user={user} />
      <main>{children}</main>
    </div>
  );
}
