import React from "react";
import "../HomePage/HomeStyle.Scss";
interface Props {}
export const Homepage: React.FC<Props> = () => {
  return (
    <div className="MainC">
      <div className="MainC__WeclomeC">
        <p>Hey i'm here</p>
      </div>
      <div className="Information">
        <p>i'm here now</p>
      </div>
    </div>
  );
};
