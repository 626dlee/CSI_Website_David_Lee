import React from "react";
import ToolButton from "./ToolButton";

class Tools extends React.Component {
  render() {
    return (
      <div className="tools">
        <ToolButton
          URL="https://www.facebook.com/Copy-Solutions-Inc-Xerox-Sales-Agent-661027070757954/"
          imgURL="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/VTlV-Social_M_Icons_White-01.png"
        />
        <ToolButton
          URL="https://twitter.com/CopySolutionInc"
          imgURL="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/hUyl-Social_M_Icons_White-02.png"
        />
        <ToolButton
          URL="https://www.instagram.com/copysolutionsinc/"
          imgURL="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/g7lb-Social_M_Icons_White-03.png"
        />
        <ToolButton
          URL="https://www.linkedin.com/company/xerox-copy-solutions-inc/"
          imgURL="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/-rWc-Social_M_Icons_White-04.png"
        />
      </div>
    );
  }
}

export default Tools;
