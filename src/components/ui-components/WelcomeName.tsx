import { useEffect, useState } from "react";
import { useMsal, useAccount } from "@azure/msal-react";

const WelcomeName = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [name, setName] = useState("");

  useEffect(() => {
    if (account && account.name) {
      setName(account.name.split(" ")[0]);
    } else {
      setName("");
    }
  }, [account]);

  if (name) {
    return <h1 className="text-xl font-semibold">Welcome, {name}</h1>;
  } else {
    return null;
  }
};

export default WelcomeName;
