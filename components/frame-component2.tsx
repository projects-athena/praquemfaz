import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  group?: string;
  frame?: string;
  marketing?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  group,
  frame,
  marketing,
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const marketingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.groupParent} style={frameDivStyle}>
      <img className={styles.groupIcon} alt="" src={group} />
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <img className={styles.frameIcon} loading="lazy" alt="" src={frame} />
      </div>
      <div className={styles.marketing} style={marketingStyle}>
        {marketing}
      </div>
    </div>
  );
};

export default FrameComponent2;
