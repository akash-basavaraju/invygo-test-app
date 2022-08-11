import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import APIService from "../../services/APIService";
import IRegistrationType from "../../types/IRegistrationType";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [fetchedData, setFetchedData] = useState<IRegistrationType[]>();
  const [searchText, setSearchText] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const data = await APIService.getRegistrations();
      setFetchedData(data);
    };

    getData();
  }, []);

  const filteredData = useMemo(() => {
    if (searchText && fetchedData) {
      return fetchedData.filter((data) => {
        return (
          data.name.toLowerCase().includes(searchText.toLowerCase()) ||
          data.locality.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return fetchedData;
  }, [fetchedData, searchText]);

  if (!fetchedData) {
    return <Loader />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-searchbar">
        <div className="dashboard-searchlabel">Search:</div>
        <div className="dashboard-search-input">
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="dashboard-cards-container">
        <div className="dashboard-cards">
          {filteredData?.map((data) => {
            const { name, locality } = data;

            return (
              <div className="dashboard-card">
                <div className="dashboard-card-name">{name}</div>
                <div className="dashboard-card-locality">{locality}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
