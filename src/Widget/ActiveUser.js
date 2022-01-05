import ItemPageActive from "../Components/ItemPageActive";
import { BarChart } from "../Components/Chart";

export default function ActiveUser() {
  return (
    <div
      className="card"
      style={{
        width: 600,
        backgroundColor: "#2C8CE6",
        color: "white",
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 10,
        position: "relative",
      }}
    >
      <div className="active-user">
        <h3>Active User Right Now</h3>
        <p className="total-user">479</p>
        <p className="title">Page view per minutes</p>
        <BarChart />
        <br />
        <ItemPageActive
          isTitle={true}
          pageActive="Top Active Page"
          activeUser="Active User"
        />
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
    </div>
  );
}
