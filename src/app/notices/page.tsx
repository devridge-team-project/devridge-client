import { Notices } from "@/components/notices";
import { notices } from "@/assets/mock/notices";

export default function NoticesPage() {
  return <Notices posts={notices} />;
}
