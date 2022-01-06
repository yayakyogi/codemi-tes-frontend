import ItemPageActive from "../Components/ItemPageActive";
import { BarChart } from "../Components/Chart";

export default function ActiveUser() {
  return (
    <div className="active-user">
      <h3>Active User Right Now</h3>
      <p className="total-user">479</p>
      <p className="title">Page view per minutes</p>
      <BarChart />
      <br />
      <div className="page-active-user">
        <p style={{ fontWeight: 400, fontSize: 15 }}>Top Active Page</p>
        <p style={{ fontWeight: 400, fontSize: 15 }}>Active User</p>
      </div>
      <div className="line"></div>
      <ItemPageActive isTitle={false} pageActive="/#/" activeUser="65" />
      <ItemPageActive
        isTitle={false}
        pageActive="/#/learner/my_course"
        activeUser="45"
      />
      <ItemPageActive
        isTitle={false}
        pageActive="/#/learner/oasdoasddasdasds"
        activeUser="23"
      />
      <ItemPageActive
        isTitle={false}
        pageActive="/#/learner/jdjfkasjnasdafs"
        activeUser="23"
      />
      <ItemPageActive
        isTitle={false}
        pageActive="/#/learner/kasldasdmkkkasdk"
        activeUser="21"
        isLast={true}
      />
      <div style={{ height: 60 }}></div>
      <a href="##" style={{ position: "absolute", bottom: 20, right: 25 }}>
        REAL TIME SUPPORT <span style={{ fontSize: 20 }}>&#8250;</span>
      </a>
    </div>
  );
}
