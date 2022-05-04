import React, { useState } from "react";
import {
  BackG,
  SearchInputContainer,
  SelectPaper,
  WhiteCard,
} from "./onboardingStyles";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { debounce, isEmpty } from "lodash";

import { useRouter } from "next/router";
import TopPane from "../../component/panes/topPane";
import { ButtonHighlight } from "../../styles/components/buttons/buttonHiglight";
import { ButtonFade } from "../../styles/components/buttons/buttonFade";
import { handleGetUsers } from "../../redux/actions/users/getUsers";
import { handleaddFriends } from "../../redux/actions/friends/addFriends";

export interface IFriends {
  users: string[];
}
export default function AddFriend() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.getUsers);
  const addFriendsData = useSelector((state: RootState) => state.addFriends);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e);
  };

  const debounceSearch = debounce((e) => {
    if (!isEmpty(e.target.value)) {
      dispatch(handleGetUsers(e.target.value));
    }
  }, 300);

  const [usersList, setUsersList] = useState<string[]>([]);

  const friends = {
    users: usersList,
  };
  const addToUsers = (name: string) => {
    const selectedName = usersList.find((element) => element === name);
    if (selectedName) {
      return;
    }
    setUsersList([...usersList, name]);
  };
  const deleteUser = (name: string) => {
    const filteredList = usersList.filter((i) => name != i);
    setUsersList(filteredList);
  };
  const handleSubmitFriends = () => {
    dispatch(handleaddFriends(friends));
    if (addFriendsData.data.status == 200) {
      router.push("/onboarding/addedSuccess");
    }
  };

  return (
    <BackG>
      <TopPane />
      <WhiteCard>
        <div className="text">
          <h3>Add your friends to the Hive</h3>
          <p className="addprompt">
            Enter the names of people you want <br />
            to add below
          </p>
          <SearchInputContainer grow={usersList.length > 0 ? 1 : 0}>
            <div className="list">
              {usersList.map((user, i) => (
                <div key={i} onClick={() => deleteUser(user)}>
                  {user}
                </div>
              ))}
            </div>
            <div className="search">
              <input type={"search"} onChange={handleChange} />
            </div>
          </SearchInputContainer>
        </div>
        <SelectPaper>
          <p>Matches</p>
          {data &&
            data?.data?.map((user, i) => (
              <div className="item-container" key={i}>
                <div className="item">
                  <div>
                    <Image
                      src={"/svgs/joe.svg"}
                      alt="user-avi"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div onClick={() => addToUsers(user?.username)}>
                    {user?.username}
                  </div>
                </div>
              </div>
            ))}
        </SelectPaper>
        <div className="addFriend">
          {usersList.length > 0 ? (
            <ButtonHighlight onClick={handleSubmitFriends}>Add</ButtonHighlight>
          ) : (
            <ButtonFade>Add</ButtonFade>
          )}
        </div>
      </WhiteCard>
    </BackG>
  );
}
