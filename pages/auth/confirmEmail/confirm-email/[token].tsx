import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleConfirmMail } from "../../../../redux/actions/auth/confirm-email";
import _ from "lodash";
import { RootState } from "../../../../redux/reducers";
export default function ConfirmEmail() {
  const dispatch = useDispatch();

  const { data } = useSelector(({ confirmMail }: RootState) => confirmMail);

  const router = useRouter();
  const { isReady } = useRouter();
  const token = router.query.token as string;

  useEffect(() => {
    if (isReady) {
      dispatch(handleConfirmMail(token));
    }
  }, [isReady]); //isready checks if hydration is done, then calls token which is gotten from params

  console.log(data, "data");

  useEffect(() => {
    if (!_.isEmpty(data?.data?.message)) {
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
    }
  }, [data]); // checks if data object has data before redirecting

  return (
    <>
      <div>redirecting..</div>
    </>
  );
}
