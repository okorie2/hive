import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleConfirmMail } from "../../../../redux/actions/auth/confirm-email";
import _ from "lodash";
export default function confirmEmail() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ confirmMail }) => confirmMail);

  const router = useRouter();
  const { isReady } = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (isReady) {
      dispatch(handleConfirmMail(token));
    }
  }, [isReady]); //isready checks if hydration is done, then calls token which is gotten from params

  useEffect(() => {
    if (!_.isEmpty(data)) {
      router.push(
        {
          pathname: "/auth/signIn/signin",
          query: {
            token: true,
            msg: data?.data?.message,
          },
        },
        "/auth/signIn/signin"
      );
      console.log(data?.data?.message, "data");
    }
  }, [data]); // checks if data object has data before redirecting

  return (
    <>
      <div>redirecting..</div>
    </>
  );
}
