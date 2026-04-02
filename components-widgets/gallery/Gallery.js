"use client";

import Styles from "./gallery.module.scss";
import Link from "next/link";
import { dataList } from "../../src/data.js";

export const Gallery = () => {
  let small = {
    width: "300px",
    height: "300px",
  };

  let large = {
    width: "300px",
    height: "450px",
  };

  const handleLinkClick = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className={Styles.box}>
        <div className={Styles.boxProjects}>
          {dataList.map((data) => (
            <li className={Styles.listProjectGallery} key={data.id}>
              <Link
                href={`/projectPage/${data.id}`}
                key={data.id}
                className={Styles.cellLink}
                onClick={handleLinkClick}
              >
                <img
                  className={Styles.linkImg}
                  src={data.source}
                  alt={data.name}
                  loading="lazy"
                  style={data.size === "small" ? small : large}
                />
              </Link>
              <h4 className={Styles.titleLink}>{data.name}</h4>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
