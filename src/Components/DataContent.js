import propTypes from "prop-types";

export default function DataContent(props) {
  const { isAnyData, data, type } = props;

  // if menu active == data confirmed
  if (type === "dataConfirmed") {
    return (
      <>
        {isAnyData !== true ? (
          <h1>Loading...</h1>
        ) : data < 1 ? (
          <h1>Data not found</h1>
        ) : (
          <div>
            <h3>10 Countries with the highest positive cases</h3>
            <div className="container-table">
              <table cellSpacing="0">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Cases 28 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    if (index >= 0 && index < 10) {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td>{data.countryRegion}</td>
                          <td>{data.confirmed}</td>
                          <td>{data.cases28Days}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    );
  }
  // if menu active == data deaths
  else if (type === "dataDeaths") {
    return (
      <>
        {isAnyData !== true ? (
          <h1>Loading...</h1>
        ) : data < 1 ? (
          <h1>Data not found</h1>
        ) : (
          <div>
            <h3>10 Countries with the highest positive cases</h3>
            <div className="container-table">
              <table cellSpacing="0">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Country</th>
                    <th>Death</th>
                    <th>Death 28 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    if (index >= 0 && index < 10) {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td>{data.countryRegion}</td>
                          <td>{data.confirmed}</td>
                          <td>{data.deaths28Days}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    );
  } else if (type === "dataRecovered") {
    return (
      <>
        {isAnyData !== true ? (
          <h1>Loading...</h1>
        ) : data < 1 ? (
          <h1>Data not found</h1>
        ) : (
          <div>
            <h3>10 countries with recovering and resurgent rates</h3>
            <div className="container-table">
              <table cellSpacing="0">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Country</th>
                    <th>Death</th>
                    <th>Death 28 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    if (index >= 0 && index < 10) {
                      console.log(data);
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td>{data.countryRegion}</td>
                          <td>{data.confirmed}</td>
                          <td>{data.deaths28Days}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    );
  }
}

DataContent.propTypes = {
  type: propTypes.string,
  data: propTypes.array,
  isAnyData: propTypes.bool,
};
