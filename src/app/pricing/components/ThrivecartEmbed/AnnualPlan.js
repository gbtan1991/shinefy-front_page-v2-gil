import { useEffect } from "react";

export default function AnnualPlan() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//tinder.thrivecart.com/embed/v2/thrivecart.js";
    script.id = "tc-chasereiner-157-GNNINE";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="tc-v2-embeddable-target"
        data-thrivecart-account="chasereiner"
        data-thrivecart-tpl="v2"
        data-thrivecart-product="158"
        data-thrivecart-embeddable="tc-chasereiner-158-3N48HO"
      ></div>
    </>
  );
}
