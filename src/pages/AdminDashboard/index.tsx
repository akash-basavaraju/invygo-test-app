import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import APIService from "../../services/APIService";
import IRegistrationType from "../../types/IRegistrationType";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [fetchedData, setFetchedData] = useState<IRegistrationType[]>();
  const [searchText, setSearchText] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedObject, setSelectedObject] = useState<IRegistrationType>();

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
        <div className="dashboard-search-input-container">
          <input
            className="dashboard-search-input"
            value={searchText}
            placeholder="Search Here..."
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="dashboard-cards">
        {filteredData?.map((data) => {
          const { name, locality } = data;

          return (
            <div
              className="dashboard-card"
              onClick={() => {
                setSelectedObject(data);
                setIsModalOpen(true);
              }}
            >
              <div className="dashboard-card-name">{name}</div>
              <div className="dashboard-card-locality">{locality}</div>
            </div>
          );
        })}
      </div>
      <div
        className={`modal-container ${
          isModalOpen ? "modal-show" : "modal-hidden"
        }`}
      >
        <div className="modal-header">Registration Details</div>
        <div className="modal-details">
          {selectedObject &&
            Object.keys(selectedObject).map((key) => {
              return (
                <div className="modal-values">
                  <div className="modal-key">{key}:</div>
                  <div className="modal-value">
                    {selectedObject && selectedObject[key]}
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <button
            className="modal-close"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
