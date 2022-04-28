import React from "react";
import { BackG, SelectPaper, WhiteCard } from "./onboardingStyles";
import { ButtonFade } from "styles/components/buttons/buttonFade";
import TopPane from "component/panes/topPane";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUsers } from "redux/actions/users/getUsers";
import { RootState } from "../../redux/reducers";
import { debounce, isEmpty } from "lodash";
export default function AddFriend() {
  const dispatch = useDispatch();
  // const [searchField, setSearchField] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e);
  };

  const debounceSearch = debounce((e) => {
    if (!isEmpty(e.target.value)) {
      dispatch(handleGetUsers(e.target.value));
    }
  }, 300);

  const { data } = useSelector((state: RootState) => state.getUsers);

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
          <input type={"search"} onChange={handleChange} />
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
                  <div>{user?.username}</div>
                </div>
              </div>
            ))}
        </SelectPaper>
        <div className="addFriend">
          <ButtonFade>Add</ButtonFade>
        </div>
      </WhiteCard>
    </BackG>
  );
}
