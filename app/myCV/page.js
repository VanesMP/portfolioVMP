import { GroupButtons } from "@/components-shared/GroupButtons";
import Styles from "@styles/myCvPage.module.scss";
import Image from "next/image";
import { OPTIONS_BUTTONS_CV } from "@/constants/groupButtons";

const CvPage = () => {
  return (
    <div className={Styles.cvPage}>
      <GroupButtons options={OPTIONS_BUTTONS_CV} n />
      <div className={Styles.cvPage__cv}>
        <Image
          src="/images/cv/cv-vanessaMP.png"
          alt="my cv ats friendly"
          width={500}
          height={700}
          priority
        />
      </div>
    </div>
  );
};

export default CvPage;
