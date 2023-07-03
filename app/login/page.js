"use client";
import Form from "@/components/Form/Form";
import { useMainContext } from "@/context/MainContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const { setProfile, profil } = useMainContext();
  const [member, setMember] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    setProfile(member);
    localStorage.setItem("user", JSON.stringify(member));
    router.push("/home");
    setSubmitting(false);
  };

  useEffect(() => {
    if (!profil) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, []);

  return (
    <div>
      <Form
        title="Sign in"
        member={member}
        setMember={setMember}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default page;
