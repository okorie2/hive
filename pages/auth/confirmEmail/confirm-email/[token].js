import { useRouter } from "next/router";
import React, { useEffect } from "react";
export default function confirmEmail() {
  const router = useRouter();
  const { token } = router.query;

  console.log(token);
  useEffect(() => {
    router.push({
      pathname: "/auth/signIn/signin",
      query: { token: true },
    });
  }, []);

  return (
    <>
      <div>redirecting..</div>
    </>
  );
}
